const pool = require('../../config/db');

async function findByProductId(productId) {
  const [rows] = await pool.execute(
    'SELECT * FROM reviews WHERE product_id = ?',
    [productId]
  );
  return rows;
}

async function create({ productId, userId, comment, rating }) {
  const [result] = await pool.execute(
    'INSERT INTO reviews (product_id, user_id, comment, rating) VALUES (?, ?, ?, ?)',
    [productId, userId, comment, rating]
  );
  return result.insertId;
}

module.exports = { findByProductId, create };