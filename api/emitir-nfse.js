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

  const cMunTomador = onlyDigits(tomador.codigoMunicipio || tomador.codigoIbge || '');
  const cepTomador = onlyDigits(tomador.cep || '');
  const hasEndNac = cMunTomador.length === 7 || cepTomador.length === 8;

  // Ordem XSD em endNac: CEP antes de cMun
  const endNacInner = [
    cepTomador.length === 8 ? `<CEP>${cepTomador}</CEP>` : '',
    cMunTomador.length === 7 ? `<cMun>${cMunTomador}</cMun>` : ''
  ]
    .filter(Boolean)
    .join('\n          ');

  const endTomadorXml = hasEndNac
    ? `\n      <end>\n        <endNac>\n          ${endNacInner}\n        </endNac>${
        tomador.logradouro ? `\n        <xLgr>${escapeXml(tomador.logradouro)}</xLgr>` : ''
      }${tomador.numero ? `\n        <nro>${escapeXml(String(tomador.numero))}</nro>` : ''}${
        tomador.bairro ? `\n        <xBairro>${escapeXml(tomador.bairro)}</xBairro>` : ''
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

  const opSimpNac = String(prestador.opSimpNac || '3');
  const regApTribSN = String(prestador.regApTribSN || '1');
  const tpRetISSQN = String(servico.issRetido ? '2' : '1');

  const imDigits = onlyDigits(prestador.inscricaoMunicipal || '');
  const imTag = imDigits ? `\n      <IM>${escapeXml(imDigits)}</IM>` : '';

  const regApTribTag =
    opSimpNac === '3' ? `\n        <regApTribSN>${regApTribSN}</regApTribSN>` : '';

  const emailTomadorTag = tomador.email ? `\n      <email>${escapeXml(tomador.email)}</email>` : '';

  const totTribTag =
    opSimpNac === '2' || opSimpNac === '3'
      ? `\n      <totTrib>\n        <pTotTribSN>0.00</pTotTribSN>\n      </totTrib>`
      : `\n      <totTrib>\n        <indTotTrib>0</indTotTrib>\n      </totTrib>`;

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
