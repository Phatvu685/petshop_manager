const { getAll, getById, getFeatured } = require('../services/productService');

async function getAllProducts(req, res) {
  try {
    const products = await getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getProductById(req, res) {
  try {
    const product = await getById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function getFeaturedProducts(req, res) {
  try {
    const products = await getFeatured();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllProducts, getProductById, getFeaturedProducts };