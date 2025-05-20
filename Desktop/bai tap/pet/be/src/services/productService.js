const { findAll, findById, findFeatured } = require('../Models/product');

async function getAll() {
  return await findAll();
}

async function getById(id) {
  const product = await findById(id);
  if (!product) throw new Error('Product not found');
  return product;
}

async function getFeatured() {
  return await findFeatured();
}

async function getPromotions() {
  return await findPromotions();
}

module.exports = { getAll, getById, getFeatured };