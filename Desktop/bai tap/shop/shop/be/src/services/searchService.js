const pool = require('../../config/db');

async function search(query) {
  const [rows] = await pool.execute(
    'SELECT * FROM products WHERE name LIKE ? OR description LIKE ?',
    [`%${query}%`, `%${query}%`]
  );
  return rows;
}

module.exports = { search };