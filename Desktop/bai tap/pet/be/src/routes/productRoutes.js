const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, getFeaturedProducts, getPromotionProducts } = require('../controllers/productController');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/featured', getFeaturedProducts);
router.get('/promotions', getPromotionProducts);

module.exports = router;
