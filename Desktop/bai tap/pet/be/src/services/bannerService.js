const { findAllActive } = require('../Models/banner');

async function getActiveBanners() {
  return await findAllActive();
}

module.exports = { getActiveBanners };
