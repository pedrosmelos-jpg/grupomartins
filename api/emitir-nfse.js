import https from 'https';
import zlib from 'zlib';
import crypto from 'crypto';
import forge from 'node-forge';
import { SignedXml } from 'xml-crypto';

/**
 * Vercel Serverless Function — Emissão Direta NFS-e Padrão Nacional (Custo Zero)
 * Rota: POST /api/emitir-nfse
 *
 * Variáveis de ambiente necessárias na Vercel (Settings > Environment Variables):
 *   NFSE_CERT_BASE64   -> Certificado A1 (.pfx) convertido em Base64
 *   NFSE_CERT_PASSWORD -> Senha do certificado A1
 */

const onlyDigits = (v) => String(v || '').replace(/\D/g, '');
const padLeft = (v, len) => String(v || '').padStart(len, '0');
const escapeXml = (s) =>
  String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

function extractPemFromPfx(pfxBuffer, password) {
  if (!pfxBuffer || !pfxBuffer.length) {
    throw new Error('Conteúdo de NFSE_CERT_BASE64 vazio ou inválido.');
  }

  try {
    const p12Asn1 = forge.asn1.fromDer(pfxBuffer.toString('binary'));
    const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, password);

    const keyBags =
      p12.getBags({ bagType: forge.pki.oids.pkcs8ShroudedKeyBag })[forge.pki.oids.pkcs8ShroudedKeyBag] ||
      p12.getBags({ bagType: forge.pki.oids.keyBag })[forge.pki.oids.keyBag] ||
      [];
    const certBags =
      p12.getBags({ bagType: forge.pki.oids.certBag })[forge.pki.oids.certBag] || [];

    if (!keyBags.length || !certBags.length) {
      throw new Error('Não foi possível extrair a chave privada ou o certificado do arquivo .pfx.');
    }

    const privateKeyPem = forge.pki.privateKeyToPem(keyBags[0].key);
    const certPem = forge.pki.certificateToPem(certBags[0].cert);
    const certBase64Clean = certPem
      .replace(/-----BEGIN CERTIFICATE-----/g, '')
      .replace(/-----END CERTIFICATE-----/g, '')
      .replace(/\r?\n/g, '');

    return { privateKeyPem, certPem, certBase64Clean };
  } catch (forgeErr) {
    const msg = String(forgeErr?.message || '');
    if (msg.toLowerCase().includes('pkcs12') || msg.toLowerCase().includes('mac')) {
      try {
        new crypto.X509Certificate(pfxBuffer);
        throw new Error(
          'O certificado .pfx usa cifra PKCS#12 não suportada pelo node-forge (ex.: PBES2/AES). Exporte novamente o .pfx no Windows marcando "Marcar esta chave como exportável" e formato PKCS#12 compatível, atualize NFSE_CERT_BASE64 e faça Redeploy.'
        );
      } catch (x509Err) {
        if (x509Err?.message && x509Err.message.includes('node-forge')) {
          throw x509Err;
        }
      }
      throw new Error(
        'Falha ao abrir o .pfx: confira se NFSE_CERT_PASSWORD está correta (sem espaços) ou se o .pfx usa cifra não suportada pelo node-forge.'
      );
    }
    throw new Error(msg || 'Não foi possível extrair a chave privada ou o certificado do arquivo .pfx.');
  }
}

function buildDpsXml({ ambiente, prestador, tomador, servico, numeroDps, serieDps }) {
  const tpAmb = ambiente === 'producao' ? '1' : '2';
  const cLocEmi = onlyDigits(prestador.codigoIbge || '5107602');
  const cnpjPrest = padLeft(onlyDigits(prestador.cnpj || '64904070000157'), 14);
  const serie = padLeft(onlyDigits(serieDps || '1'), 5);
  const nDps = padLeft(onlyDigits(numeroDps || '1'), 15);

  // Id padrão Nacional: "DPS" + cLocEmi(7) + tpInsc(1: 2=CNPJ) + nInsc(14) + serie(5) + nDPS(15) = 45 chars
  const infDpsId = `DPS${cLocEmi}2${cnpjPrest}${serie}${nDps}`;

  const now = new Date();
  const offsetMs = -4 * 60 * 60 * 1000; // Fuso Mato Grosso (-04:00)
  const local = new Date(now.getTime() + offsetMs);
  const dhEmi = local.toISOString().slice(0, 19) + '-04:00';
  const dCompet = servico.dataCompetencia || local.toISOString().slice(0, 10);

  const docTomador = onlyDigits(tomador.documento);
  const tomadorDocTag =
    docTomador.length === 14
      ? `<CNPJ>${docTomador}</CNPJ>`
      : docTomador.length === 11
        ? `<CPF>${docTomador}</CPF>`
        : '';

  const cTribNac = padLeft(onlyDigits(servico.codigoServico || '170101'), 6);
  const cNBS = onlyDigits(servico.codigoNbs || '118064000');
  const vServ = Number(servico.valor || 0).toFixed(2);
  const pAliq = Number(servico.aliquotaIss || 0);
  const opSimpNac = String(prestador.opSimpNac || '3'); // 1=Não optante, 2=MEI, 3=ME/EPP
  const regApTribSN = String(prestador.regApTribSN || '1'); // 1=Simples Nacional
  const tpRetISSQN = String(servico.issRetido ? '2' : '1'); // 1=Não retido, 2=Retido pelo tomador

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<DPS xmlns="http://www.sped.fazenda.gov.br/nfse" versao="1.00">
  <infDPS Id="${infDpsId}">
    <tpAmb>${tpAmb}</tpAmb>
    <dhEmi>${dhEmi}</dhEmi>
    <verAplic>GrupoMartinsERP_4.0</verAplic>
    <serie>${Number(serie)}</serie>
    <nDPS>${Number(nDps)}</nDPS>
    <dCompet>${dCompet}</dCompet>
    <tpEmit>1</tpEmit>
    <cLocEmi>${cLocEmi}</cLocEmi>
    <prest>
      <CNPJ>${cnpjPrest}</CNPJ>
      ${prestador.inscricaoMunicipal ? `<IM>${escapeXml(onlyDigits(prestador.inscricaoMunicipal))}</IM>` : ''}
      <regTrib>
        <opSimpNac>${opSimpNac}</opSimpNac>
        ${opSimpNac === '3' ? `<regApTribSN>${regApTribSN}</regApTribSN>` : ''}
        <regEspTrib>0</regEspTrib>
      </regTrib>
    </prest>
    <toma>
      ${tomadorDocTag}
      <xNome>${escapeXml(tomador.nome)}</xNome>
      ${tomador.email ? `<email>${escapeXml(tomador.email)}</email>` : ''}
    </toma>
    <serv>
      <locPrest>
        <cLocPrestacao>${cLocEmi}</cLocPrestacao>
      </locPrest>
      <cServ>
        <cTribNac>${cTribNac}</cTribNac>
        <xDescServ>${escapeXml(servico.descricao)}</xDescServ>
        ${cNBS ? `<cNBS>${cNBS}</cNBS>` : ''}
      </cServ>
    </serv>
    <valores>
      <vServPrest>
        <vServ>${vServ}</vServ>
      </vServPrest>
      <trib>
        <tribMun>
          <tribISSQN>1</tribISSQN>
          <tpRetISSQN>${tpRetISSQN}</tpRetISSQN>
          ${pAliq > 0 ? `<pAliq>${pAliq.toFixed(2)}</pAliq>` : ''}
        </tribMun>
        <totTrib>
          <indTotTrib>0</indTotTrib>
        </totTrib>
      </trib>
    </valores>
  </infDPS>
</DPS>`;

  return { xml, infDpsId };
}

function signDpsXml(xml, infDpsId, privateKeyPem, certBase64Clean) {
  const sig = new SignedXml({
    privateKey: privateKeyPem,
    publicCert: `-----BEGIN CERTIFICATE-----\n${certBase64Clean}\n-----END CERTIFICATE-----`,
    signatureAlgorithm: 'http://www.w3.org/2000/09/xmldsig#rsa-sha1',
    canonicalizationAlgorithm: 'http://www.w3.org/TR/2001/REC-xml-c14n-20010315'
  });

  sig.addReference({
    xpath: `//*[@Id='${infDpsId}']`,
    digestAlgorithm: 'http://www.w3.org/2000/09/xmldsig#sha1',
    transforms: [
      'http://www.w3.org/2000/09/xmldsig#enveloped-signature',
      'http://www.w3.org/TR/2001/REC-xml-c14n-20010315'
    ]
  });

  sig.computeSignature(xml, {
    location: { reference: "//*[local-name(.)='infDPS']", action: 'after' }
  });

  return sig.getSignedXml();
}

function postToSefin({ hostname, path, payloadJson, pfxBuffer, passphrase }) {
  return new Promise((resolve, reject) => {
    const body = Buffer.from(JSON.stringify(payloadJson), 'utf8');
    const req = https.request(
      {
        hostname,
        port: 443,
        path,
        method: 'POST',
        pfx: pfxBuffer,
        passphrase,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': body.length
        }
      },
      (res) => {
        const chunks = [];
        res.on('data', (d) => chunks.push(d));
        res.on('end', () => {
          const raw = Buffer.concat(chunks).toString('utf8');
          let parsed = null;
          try {
            parsed = JSON.parse(raw);
          } catch {}
          resolve({ statusCode: res.statusCode, raw, parsed });
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' });
  }

  const certBase64 = process.env.NFSE_CERT_BASE64;
  const certPassword = process.env.NFSE_CERT_PASSWORD;

  if (!certBase64 || !certPassword) {
    return res.status(400).json({
      error:
        'Certificado digital A1 ainda não configurado na Vercel. Adicione as variáveis NFSE_CERT_BASE64 e NFSE_CERT_PASSWORD em Settings > Environment Variables.'
    });
  }

  try {
    const {
      ambiente = 'homologacao',
      prestador = {},
      tomador = {},
      servico = {},
      numeroDps = '1',
      serieDps = '1'
    } = req.body || {};

    if (!tomador.nome || !tomador.documento || !servico.descricao || !servico.valor) {
      return res.status(400).json({ error: 'Preencha cliente, CNPJ/CPF, descrição e valor do serviço.' });
    }

    const pfxBuffer = Buffer.from(certBase64.trim(), 'base64');
    const { privateKeyPem, certBase64Clean } = extractPemFromPfx(pfxBuffer, certPassword);

    const { xml, infDpsId } = buildDpsXml({ ambiente, prestador, tomador, servico, numeroDps, serieDps });
    const signedXml = signDpsXml(xml, infDpsId, privateKeyPem, certBase64Clean);

    const gzipped = zlib.gzipSync(Buffer.from(signedXml, 'utf8'));
    const dpsXmlGZipB64 = gzipped.toString('base64');

    const isProd = ambiente === 'producao';
    const hostname = isProd ? 'sefin.nfse.gov.br' : 'sefin.producaorestrita.nfse.gov.br';
    const danfseHost = isProd ? 'adn.nfse.gov.br' : 'adn.producaorestrita.nfse.gov.br';

    const response = await postToSefin({
      hostname,
      path: '/SefinNacional/nfse',
      payloadJson: { dpsXmlGZipB64 },
      pfxBuffer,
      passphrase: certPassword
    });

    if (response.statusCode >= 200 && response.statusCode < 300 && response.parsed?.chaveAcesso) {
      const chaveAcesso = response.parsed.chaveAcesso;
      let xmlRetorno = '';
      if (response.parsed.nfseXmlGZipB64) {
        try {
          xmlRetorno = zlib.gunzipSync(Buffer.from(response.parsed.nfseXmlGZipB64, 'base64')).toString('utf8');
        } catch {}
      }
      const matchNum = xmlRetorno.match(/<nNFSe>(\d+)<\/nNFSe>/);
      const numeroNfse = matchNum ? matchNum[1] : String(numeroDps);

      return res.status(200).json({
        ok: true,
        numero: numeroNfse,
        chaveAcesso,
        pdfUrl: `https://${danfseHost}/danfse/${chaveAcesso}`,
        xmlRetorno
      });
    }

    const errDetail =
      response.parsed?.erros?.map((e) => `${e.Codigo || ''}: ${e.Descricao || e.Mensagem || ''}`).join(' | ') ||
      response.parsed?.mensagem ||
      response.raw ||
      `HTTP ${response.statusCode}`;

    return res.status(422).json({
      error: `Retorno da SEFIN Nacional (${response.statusCode}): ${errDetail}`
    });
  } catch (err) {
    console.error('Erro emitir-nfse:', err);
    return res.status(500).json({ error: err.message || 'Erro interno ao processar emissão de NFS-e.' });
  }
}
