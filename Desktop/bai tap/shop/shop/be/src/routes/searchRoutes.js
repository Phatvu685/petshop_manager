const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { searchHandler } = require('../controllers/searchController');

router.get('/', authMiddleware, searchHandler);

module.exports = router;
