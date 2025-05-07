const pool = require('../../config/db');

async function findByUserId(userId) {
  const [rows] = await pool.execute(
    'SELECT c.*, p.name, p.brand, p.price, p.image FROM carts c JOIN products p ON c.product_id = p.id WHERE c.user_id = ?',
    [userId]
  );
  return rows;
}

async function add(userId, productId, quantity) {
  const [result] = await pool.execute(
    'INSERT INTO carts (user_id, product_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?',
    [userId, productId, quantity, quantity]
  );
  return result;
}

async function updateQuantity(cartId, quantity) {
  const [result] = await pool.execute(
    'UPDATE carts SET quantity = ? WHERE id = ?',
    [quantity, cartId]
  );
  return result;
}

async function remove(cartId) {
  const [result] = await pool.execute('DELETE FROM carts WHERE id = ?', [cartId]);
  return result;
}

module.exports = { findByUserId, add, updateQuantity, remove };