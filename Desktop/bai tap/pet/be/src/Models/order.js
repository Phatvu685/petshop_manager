const pool = require('../../config/db');

async function create({ userId, totalAmount, shippingAddress, phone, paymentMethod }) {
  const [result] = await pool.execute(
    'INSERT INTO orders (user_id, total_amount, shipping_address, phone, payment_method) VALUES (?, ?, ?, ?, ?)',
    [userId, totalAmount, shippingAddress, phone, paymentMethod]
  );
  return result.insertId;
}

async function findByUserId(userId) {
  const [rows] = await pool.execute(
    'SELECT * FROM orders WHERE user_id = ?',
    [userId]
  );
  return rows;
}

module.exports = { create, findByUserId };