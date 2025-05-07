const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, getFeaturedProducts } = require('../controllers/productController');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/featured', getFeaturedProducts);

module.exports = router;