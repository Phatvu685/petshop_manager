const pool = require('../../config/db');

async function findAllActive() {
  const [rows] = await pool.execute('SELECT * FROM banners WHERE is_active = TRUE ORDER BY created_at DESC');
  return rows;
}

module.exports = { findAllActive };
