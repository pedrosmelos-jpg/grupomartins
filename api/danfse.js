import https from 'https';

export default async function handler(req, res) {
  // Permite apenas GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido. Use GET.' });
  }

  const { chave, ambiente = '2' } = req.query;

  // Validação básica da chave de acesso (50 dígitos numéricos)
  const chaveLimpa = String(chave || '').replace(/\D/g, '');
  if (chaveLimpa.length !== 50) {
    return res.status(400).json({
      error: 'Chave de acesso inválida. Ela deve conter exatamente 50 dígitos.'
    });
  }

  const certBase64 = process.env.NFSE_CERT_BASE64;
  const certPassword = process.env.NFSE_CERT_PASSWORD;

  if (!certBase64 || !certPassword) {
    return res.status(500).json({
      error: 'Variáveis NFSE_CERT_BASE64 ou NFSE_CERT_PASSWORD não configuradas na Vercel.'
    });
  }

  // Define o host conforme o ambiente: 1 = Produção, 2 = Homologação (Produção Restrita)
  const isProducao = String(ambiente) === '1' || String(ambiente).toLowerCase() === 'producao';
  const hostname = isProducao
    ? 'adn.nfse.gov.br'
    : 'adn.producaorestrita.nfse.gov.br';

  const options = {
    hostname,
    port: 443,
    path: `/danfse/${chaveLimpa}`,
    method: 'GET',
    pfx: Buffer.from(certBase64, 'base64'),
    passphrase: certPassword,
    headers: {
      Accept: 'application/pdf'
    }
  };

  try {
    const pdfBuffer = await new Promise((resolve, reject) => {
      const request = https.request(options, (response) => {
        const chunks = [];

        response.on('data', (chunk) => chunks.push(chunk));
        response.on('end', () => {
          const buffer = Buffer.concat(chunks);

          if (response.statusCode === 200) {
            resolve(buffer);
          } else {
            const errorText = buffer.toString('utf8');
            reject({
              status: response.statusCode,
              message: errorText || `Erro HTTP ${response.statusCode} ao buscar DANFSe.`
            });
          }
        });
      });

      request.on('error', (err) => reject({ status: 500, message: err.message }));
      request.end();
    });

    // Devolve o PDF oficial pronto para abrir ou baixar
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="DANFSe-${chaveLimpa}.pdf"`);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).send(pdfBuffer);

  } catch (err) {
    console.error('Erro ao buscar DANFSe no ADN:', err);
    return res.status(err.status || 500).json({
      error: 'Falha ao obter o DANFSe oficial.',
      details: err.message
    });
  }
}
