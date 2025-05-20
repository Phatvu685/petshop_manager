const pool = require('../../config/db');

async function findAll() {
  const [rows] = await pool.execute('SELECT * FROM products');
  return rows;
}

async function findById(id) {
  const [rows] = await pool.execute('SELECT * FROM products WHERE id = ?', [id]);
  return rows[0];
}

async function findFeatured() {
  const [rows] = await pool.execute('SELECT * FROM products ORDER BY rating DESC LIMIT 6');
  return rows;
}

async function findPromotions() {
  const [rows] = await pool.execute('SELECT * FROM products WHERE old_price > price ORDER BY date_added DESC LIMIT 6');
  return rows;
}

module.exports = { findAll, findById, findFeatured };