const { findByUserId, add, updateQuantity, remove } = require('../Models/cart');

async function getCart(userId) {
  return await findByUserId(userId);
}

async function addToCart(userId, productId, quantity) {
  return await add(userId, productId, quantity);
}

async function updateQuantityInCart(cartId, quantity) {
  return await updateQuantity(cartId, quantity);
}

async function removeFromCart(cartId) {
  return await remove(cartId);
}

module.exports = { getCart, addToCart, updateQuantityInCart, removeFromCart };