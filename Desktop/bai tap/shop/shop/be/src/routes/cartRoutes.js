const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  getCartItems,
  addItemToCart,
  updateCartQuantity,
  removeItemFromCart
} = require('../controllers/cartController');

router.get('/', authMiddleware, getCartItems);
router.post('/', authMiddleware, addItemToCart);
router.put('/:cartId', authMiddleware, updateCartQuantity);
router.delete('/:cartId', authMiddleware, removeItemFromCart);

module.exports = router;
