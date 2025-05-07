const pool = require('../../config/db');

async function findByEmail(email) {
  const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
}

async function create({ username, email, password }) {
  const [result] = await pool.execute(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, password]
  );
  return result.insertId;
}

module.exports = { findByEmail, create };