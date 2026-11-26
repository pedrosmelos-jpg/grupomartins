export default async function handler(req, res) {
  const checkServer = async (url, { treatAnyHttpAsOnline = false } = {}) => {
    const start = Date.now();
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 8000);
      const response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal
      });
      clearTimeout(timer);
      const ms = Date.now() - start;

      // Em endpoints que exigem mTLS/certificado ou retornam 401/403/404,
      // uma resposta HTTP indica que o servidor alcançou a rede.
      if (treatAnyHttpAsOnline) {
        return {
          online: true,
          status: response.status,
          ms,
          requiresCert: response.status === 401 || response.status === 403
        };
      }

      if (response.status < 500) {
        return { online: true, status: response.status, ms };
      }

      return { online: false, status: response.status, ms };
    } catch (err) {
      return {
        online: false,
        status: 0,
        ms: Date.now() - start,
        error: err?.name || 'FetchError'
      };
    }
  };

  const [sefin, adn] = await Promise.all([
    checkServer('https://sefin.nfse.gov.br/SefinNacional/', { treatAnyHttpAsOnline: true }),
    checkServer('https://adn.nfse.gov.br/', { treatAnyHttpAsOnline: false })
  ]);

  res.status(200).json({
    ok: true,
    checkedAt: new Date().toISOString(),
    sefin,
    adn
  });
}
