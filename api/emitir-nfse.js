import https from 'https';
import zlib from 'zlib';
import crypto from 'crypto';
import forge from 'node-forge';
import { SignedXml } from 'xml-crypto';

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
          'O certificado .pfx usa cifra PKCS#12 não suportada pelo node-forge. Exporte novamente o .pfx no Windows marcando "Marcar esta chave como exportável" e formato PKCS#12 compatível, atualize NFSE_CERT_BASE64 e faça Redeploy.'
        );
      } catch (x509Err) {
        if (x509Err?.message && x509Err.message.includes('node-forge')) {
          throw x509Err;
        }
      }
      throw new Error(
        'Falha ao abrir o .pfx: confira se NFSE_CERT_PASSWORD está correta (sem espaços) ou se o .pfx exige reexportação compatível.'
      );
    }
    throw new Error(msg || 'Não foi possível extrair a chave privada ou o certificado do arquivo .pfx.');
  }
}

function buildDpsXml({ ambiente, prestador, tomador, servico, numeroDps, serieDps }) {
  const tpAmb = ambiente === 'producao' ? '1' : '2';

  const cLocEmi = onlyDigits(prestador.codigoIbge || '5107602');
  if (cLocEmi.length !== 7) {
    throw new Error('Código IBGE do município emissor (cLocEmi) deve ter 7 dígitos.');
  }

  const cnpjPrest = padLeft(onlyDigits(prestador.cnpj || '64904070000157'), 14).slice(-14);
  const serieNum = Math.max(1, Number(onlyDigits(serieDps || '1')) || 1);
  const nDpsNum = Math.max(1, Number(onlyDigits(numeroDps || '1')) || 1);

  const serie = padLeft(serieNum, 5).slice(-5);
  const nDps = padLeft(nDpsNum, 15).slice(-15);

  const infDpsId = `DPS${cLocEmi}2${cnpjPrest}${serie}${nDps}`;

  const now = new Date();
  const offsetMs = -4 * 60 * 60 * 1000;
  const local = new Date(now.getTime() + offsetMs);
  const dhEmi = local.toISOString().slice(0, 19) + '-04:00';
  const dCompet = servico.dataCompetencia || local.toISOString().slice(0, 10);

  const docTomador = onlyDigits(tomador.documento);
  let tomadorDocTag = '';
  if (docTomador.length === 14) {
    tomadorDocTag = `<CNPJ>${docTomador}</CNPJ>`;
  } else if (docTomador.length === 11) {
    tomadorDocTag = `<CPF>${docTomador}</CPF>`;
  } else {
    throw new Error('Documento do tomador inválido: informe CPF (11 dígitos) ou CNPJ (14 dígitos).');
  }

  const opSimpNac = String(prestador.opSimpNac || '3');
  const regApTribSN = String(prestador.regApTribSN || '1');
  const tpRetISSQN = String(servico.issRetido ? '2' : '1');

  const rawMunTomador = onlyDigits(tomador.codigoMunicipio || tomador.codigoIbge || '');
  const rawCepTomador = onlyDigits(tomador.cep || '');
  const exigirEndNac = tpRetISSQN === '2';

  const cMunTomador =
    rawMunTomador.length === 7 ? rawMunTomador : exigirEndNac ? cLocEmi : '';
  const cepTomador =
    rawCepTomador.length === 8 ? rawCepTomador : exigirEndNac ? '78700000' : '';

  const hasEndNac = cMunTomador.length === 7 || cepTomador.length === 8;

  const endNacInner = [
    cMunTomador.length === 7 ? `<cMun>${cMunTomador}</cMun>` : '',
    cepTomador.length === 8 ? `<CEP>${cepTomador}</CEP>` : ''
  ]
    .filter(Boolean)
    .join('\n          ');

  const xLgrVal = tomador.logradouro || (exigirEndNac ? 'Nao informado' : '');
  const nroVal = tomador.numero ? String(tomador.numero) : exigirEndNac ? 'S/N' : '';
  const xBairroVal = tomador.bairro || (exigirEndNac ? 'Centro' : '');

  const endTomadorXml = hasEndNac
    ? `\n      <end>\n        <endNac>\n          ${endNacInner}\n        </endNac>${
        xLgrVal ? `\n        <xLgr>${escapeXml(xLgrVal)}</xLgr>` : ''
      }${nroVal ? `\n        <nro>${escapeXml(nroVal)}</nro>` : ''}${
        xBairroVal ? `\n        <xBairro>${escapeXml(xBairroVal)}</xBairro>` : ''
      }\n      </end>`
    : '';

  const cTribNac = padLeft(onlyDigits(servico.codigoServico || '170101'), 6).slice(-6);
  const vServNum = Number(servico.valor || 0);
  if (!(vServNum > 0)) {
    throw new Error('Valor do serviço deve ser maior que zero.');
  }
  const vServ = vServNum.toFixed(2);

  const descLimpa = String(servico.descricao || '')
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .slice(0, 2000);

  const imDigits = onlyDigits(prestador.inscricaoMunicipal || '');
  const imTag = imDigits ? `\n      <IM>${escapeXml(imDigits)}</IM>` : '';

  const regApTribTag =
    opSimpNac === '3' ? `\n        <regApTribSN>${regApTribSN}</regApTribSN>` : '';

  const emailTomadorTag = tomador.email ? `\n      <email>${escapeXml(tomador.email)}</email>` : '';

  const totTribTag = `\n      <totTrib>\n        <vTotTrib>\n          <vTotTribFed>0.00</vTotTribFed>\n          <vTotTribEst>0.00</vTotTribEst>\n          <vTotTribMun>0.00</vTotTribMun>\n        </vTotTrib>\n      </totTrib>`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<DPS xmlns="http://www.sped.fazenda.gov.br/nfse" versao="1.00">
  <infDPS Id="${infDpsId}">
    <tpAmb>${tpAmb}</tpAmb>
    <dhEmi>${dhEmi}</dhEmi>
    <verAplic>GrupoMartinsERP_4.0</verAplic>
    <serie>${serieNum}</serie>
    <nDPS>${nDpsNum}</nDPS>
    <dCompet>${dCompet}</dCompet>
    <tpEmit>1</tpEmit>
    <finNFSe>0</finNFSe>
    <cLocEmi>${cLocEmi}</cLocEmi>
    <prest>
      <CNPJ>${cnpjPrest}</CNPJ>${imTag}
      <regTrib>
        <opSimpNac>${opSimpNac}</opSimpNac>${regApTribTag}
        <regEspTrib>0</regEspTrib>
      </regTrib>
    </prest>
    <toma>
      ${tomadorDocTag}
      <xNome>${escapeXml(tomador.nome)}</xNome>${endTomadorXml}${emailTomadorTag}
    </toma>
    <indDest>0</indDest>
    <serv>
      <locPrest>
        <cLocPrestacao>${cLocEmi}</cLocPrestacao>
      </locPrest>
      <cServ>
        <cTribNac>${cTribNac}</cTribNac>
        <xDescServ>${escapeXml(descLimpa)}</xDescServ>
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
        </tribMun>${totTribTag}
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
    canonicalizationAlgorithm: 'http://www.w3.org/TR/2001/REC-xml-c14n-20010315',
    idAttribute: 'Id'
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

  let signedXmlDebug = '';

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
    signedXmlDebug = signDpsXml(xml, infDpsId, privateKeyPem, certBase64Clean);

    const gzipped = zlib.gzipSync(Buffer.from(signedXmlDebug, 'utf8'));
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
      error: `Retorno da SEFIN Nacional (${response.statusCode}): ${errDetail}`,
      ...(ambiente !== 'producao' ? { xmlGerado: signedXmlDebug, sefinRaw: response.raw } : {})
    });
  } catch (err) {
    console.error('Erro emitir-nfse:', err);
    return res.status(500).json({
      error: err.message || 'Erro interno ao processar emissão de NFS-e.',
      ...(signedXmlDebug ? { xmlGerado: signedXmlDebug } : {})
    });
  }
}
