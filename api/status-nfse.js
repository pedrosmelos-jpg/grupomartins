export default async function handler(req, res) {
  const checkServer = async (url) => {
    const start = Date.now();
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 5000);
      const response = await fetch(url, {
        method: 'GET',
        signal: controller.signal
      });
      clearTimeout(timer);
      const ms = Date.now() - start;
      // Qualquer resposta abaixo de 500 (200, 401, 403, 404) significa que o servidor está no ar
      if (response.status < 500) {
        return { online: true, status: response.status, ms };
      }
      return { online: false, status: response.status, ms };
    } catch (err) {
      return { online: false, status: 0, ms: Date.now() - start, error: err.name };
    }
  };

  const [sefin, adn] = await Promise.all([
    checkServer('https://sefin.nfse.gov.br/SefinNacional/'),
    checkServer('https://adn.nfse.gov.br/')
  ]);

  res.status(200).json({
    ok: true,
    checkedAt: new Date().toISOString(),
    sefin,
    adn
  });
}
