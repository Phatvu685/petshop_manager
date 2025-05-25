import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosClient.get('/products/' + id);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <main className="main-content">
      <div className="container">
        <h2 className="main-title">{product.name}</h2>
        <div style={{ display: 'flex', gap: '2rem' }}>

          <img src={'/image/' + product.image} alt={product.name} style={{ width: '300px', borderRadius: '8px' }} />
          <div>
            <p className="card-price">${product.price}</p>
            <p>{product.description}</p>
            <p>Brand: {product.brand}</p>
            <p>Rating: {product.rating} stars</p>
            <p>Stock: {product.in_stock ? 'In Stock' : 'Out of Stock'}</p>
            <button
              className="card-button"
              onClick={() => addToCart(product)}
              disabled={!product.in_stock}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
