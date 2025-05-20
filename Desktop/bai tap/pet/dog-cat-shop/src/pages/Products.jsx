import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import axiosClient from '../api/axiosClient';

function Products({ addToCart }) {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 'all',
    brand: 'all',
    rating: 'all',
    inStock: 'all',
  });

  const [products, setProducts] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosClient.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filters.category === 'all' || product.category === filters.category) &&
      (filters.price === 'all' ||
        (filters.price === 'low' && product.price <= 20) ||
        (filters.price === 'high' && product.price > 20)) &&
      (filters.brand === 'all' || product.brand === filters.brand) &&
      (filters.rating === 'all' || product.rating >= parseFloat(filters.rating)) &&
      (filters.inStock === 'all' || product.inStock === (filters.inStock === 'true')) &&
      (searchQuery === '' || product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  })
  // Lọc bỏ 2 sản phẩm "thức ăn cho chó" và "đồ chơi cho mèo"
  .filter(product => product.title !== 'thức ăn cho chó' && product.title !== 'đồ chơi cho mèo');

  return (
    <main className="main-content">
      <div className="container">
        <h2 className="main-title">Our Products</h2>
        <p className="main-text">Explore our wide range of products for your pets.</p>
        <div className="filter-container">
          <select name="category" onChange={handleFilterChange}>
            <option value="all">All Categories</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
          <select name="price" onChange={handleFilterChange}>
            <option value="all">All Prices</option>
            <option value="low">Under $20</option>
            <option value="high">Over $20</option>
          </select>
          <select name="brand" onChange={handleFilterChange}>
            <option value="all">All Brands</option>
            <option value="Royal Canin">Royal Canin</option>
            <option value="PetSafe">PetSafe</option>
            <option value="Generic">Generic</option>
          </select>
          <select name="rating" onChange={handleFilterChange}>
            <option value="all">All Ratings</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
          </select>
          <select name="inStock" onChange={handleFilterChange}>
            <option value="all">All Stock</option>
            <option value="true">In Stock</option>
            <option value="false">Out of Stock</option>
          </select>
        </div>
        <div className="grid">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.image}
              price={`$${product.price}`}
              addToCart={addToCart}
              isProduct={true}
              id={product.id}
              product={product} // Truyền prop product đầy đủ
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Products;
