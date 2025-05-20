const { getReviewsByProductId, createReview } = require('../services/reviewService');

async function getReviewsHandler(req, res) {
  try {
    const { productId } = req.query;
    const reviews = await getReviewsByProductId(productId);
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createReviewHandler(req, res) {
  try {
    const userId = req.user.id;
    const { productId, comment, rating } = req.body;
    const reviewId = await createReview({ productId, userId, comment, rating });
    res.json({ id: reviewId, message: 'Review created' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { getReviewsHandler, createReviewHandler };