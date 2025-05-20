const { getCart, addToCart, updateQuantityInCart, removeFromCart } = require('../services/cartService');

async function getCartItems(req, res) {
  try {
    const userId = req.user.id;
    const cart = await getCart(userId);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function addItemToCart(req, res) {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;
    await addToCart(userId, productId, quantity);
    res.json({ message: 'Added to cart' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateCartQuantity(req, res) {
  try {
    const { cartId } = req.params;
    const { quantity } = req.body;
    await updateQuantityInCart(cartId, quantity);
    res.json({ message: 'Quantity updated' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function removeItemFromCart(req, res) {
  try {
    const { cartId } = req.params;
    await removeFromCart(cartId);
    res.json({ message: 'Item removed' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { getCartItems, addItemToCart, updateCartQuantity, removeItemFromCart };