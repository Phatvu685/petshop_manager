const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  getReviewsHandler,
  createReviewHandler
} = require('../controllers/reviewController');

router.get('/:productId', getReviewsHandler);
router.post('/', authMiddleware, createReviewHandler);

module.exports = router;
