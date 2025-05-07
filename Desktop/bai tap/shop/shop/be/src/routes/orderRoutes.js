const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  createOrderHandler,
  getOrdersHandler,
  buyNowHandler
} = require('../controllers/orderController');

router.post('/', authMiddleware, createOrderHandler);
router.get('/', authMiddleware, getOrdersHandler);
router.post('/buyNow', authMiddleware, buyNowHandler);

module.exports = router;
