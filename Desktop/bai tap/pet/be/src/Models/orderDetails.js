const pool = require('../../config/db');

async function create({ orderId, productId, quantity }) {
  const [result] = await pool.execute(
    'INSERT INTO order_details (order_id, product_id, quantity) VALUES (?, ?, ?)',
    [orderId, productId, quantity]
  );
  return result.insertId;
}

module.exports = { create };
