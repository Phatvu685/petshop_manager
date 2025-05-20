const { getActiveBanners } = require('../services/bannerService');

async function getBanners(req, res) {
  try {
    const banners = await getActiveBanners();
    res.json(banners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getBanners };
