export default async function handler(req, res) {
  const checkUrl = async (url, timeoutMs = 8000) => {
    const start = Date.now();
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal
      });
      clearTimeout(timer);
      return {
        ok: true,
        status: response.status,
        ms: Date.now() - start
      };
    } catch (err) {
      clearTimeout(timer);
      return {
        ok: false,
        status: 0,
        ms: Date.now() - start,
        error: err?.name || 'FetchError'
      };
    }
  };

  const [portal, sefinDirect, adnDirect] = await Promise.all([
    checkUrl('https://www.nfse.gov.br/EmissorNacional'),
    checkUrl('https://sefin.nfse.gov.br/SefinNacional/'),
    checkUrl('https://adn.nfse.gov.br/')
  ]);

  const sefinOnline = sefinDirect.ok ? sefinDirect.status < 500 : portal.ok;
  const adnOnline = adnDirect.ok ? adnDirect.status < 500 : false;

  res.status(200).json({
    ok: true,
    checkedAt: new Date().toISOString(),
    sefin: {
      online: sefinOnline,
      status: sefinDirect.ok ? sefinDirect.status : portal.status,
      ms: sefinDirect.ok ? sefinDirect.ms : portal.ms,
      viaPortalFallback: !sefinDirect.ok && portal.ok,
      error: sefinDirect.error || null
    },
    adn: {
      online: adnOnline,
      status: adnDirect.status,
      ms: adnDirect.ms,
      error: adnDirect.error || null
    }
  });
}
