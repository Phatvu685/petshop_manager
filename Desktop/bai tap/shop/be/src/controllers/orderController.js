const { createOrder, getOrdersByUserId } = require('../services/orderService');
const { createOrderDetails } = require('../services/orderDetailsService');

async function createOrderHandler(req, res) {
  try {
    const userId = req.user.id;
    const { totalAmount, shippingAddress, phone, paymentMethod } = req.body;
    const orderId = await createOrder({ userId, totalAmount, shippingAddress, phone, paymentMethod });
    res.json({ id: orderId, message: 'Order created' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getOrdersHandler(req, res) {
  try {
    const userId = req.user.id;
    const orders = await getOrdersByUserId(userId);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function buyNowHandler(req, res) {
  try {
    const userId = req.user.id;
    const { productId, quantity, shippingAddress, phone, paymentMethod } = req.body;

    // Calculate totalAmount (assuming product price * quantity)
    // For simplicity, fetch product price from productService
    const productService = require('../services/productService');
    const product = await productService.getById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const totalAmount = product.price * quantity;

    // Create order
    const orderId = await createOrder({ userId, totalAmount, shippingAddress, phone, paymentMethod });

    // Create order details
    await createOrderDetails({ orderId, productId, quantity });

    res.json({ id: orderId, message: 'Order created successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createOrderHandler, getOrdersHandler, buyNowHandler };
