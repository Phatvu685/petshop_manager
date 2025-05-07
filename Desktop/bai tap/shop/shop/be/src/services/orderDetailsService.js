const { create } = require('../Models/orderDetails');

async function createOrderDetails({ orderId, productId, quantity }) {
  return await create({ orderId, productId, quantity });
}

module.exports = { createOrderDetails };
