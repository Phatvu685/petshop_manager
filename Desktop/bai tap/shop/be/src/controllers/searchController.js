const { search } = require('../services/searchService');

async function searchHandler(req, res) {
  try {
    const { query } = req.query;
    const results = await search(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { searchHandler };