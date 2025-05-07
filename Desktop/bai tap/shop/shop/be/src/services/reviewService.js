const { findByProductId, create } = require('../Models/review');

async function getReviewsByProductId(productId) {
  return await findByProductId(productId);
}

async function createReview({ productId, userId, comment, rating }) {
  return await create({ productId, userId, comment, rating });
}

module.exports = { getReviewsByProductId, createReview };