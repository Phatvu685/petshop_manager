const { create, findByUserId } = require('../Models/order');

async function createOrder({ userId, totalAmount, shippingAddress, phone, paymentMethod }) {
  return await create({ userId, totalAmount, shippingAddress, phone, paymentMethod });
}

async function getOrdersByUserId(userId) {
  return await findByUserId(userId);
}

module.exports = { createOrder, getOrdersByUserId };