import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch product detail from backend API
    fetch(`${process.env.REACT_APP_API_URL}/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(() => setProduct(null));

    // Fetch reviews for product
    fetch(`${process.env.REACT_APP_API_URL}/api/reviews/${id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(() => setReviews([]));
  }, [id]);

  if (!product) {
    return <div>Không tìm thấy sản phẩm.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Đã thêm sản phẩm vào giỏ hàng!');
  };

  const handleBuyNow = () => {
    alert('Chức năng mua ngay chưa được triển khai.');
  };

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)}>Quay lại</button>
      <h2>{product.name}</h2>
      <img src={product.image && !product.image.startsWith('http') && !product.image.startsWith('/image/') ? `/image/${product.image}` : product.image} alt={product.name} style={{ maxWidth: '300px' }} />
      <p>Giá: {product.price} VNĐ</p>
      <p>Mô tả: {product.description}</p>
      <p>Đánh giá: {product.rating} ★</p>
      <p>Tình trạng: {product.inStock ? 'Còn hàng' : 'Hết hàng'}</p>

      <div className="reviews">
        <h3>Đánh giá và bình luận</h3>
        {Array.isArray(reviews) ? reviews.map(review => (
          <div key={review.id} className="review">
            <strong>{review.user}</strong>: {review.comment} ({review.rating} ★)
          </div>
        )) : null}
      </div>

      <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
      <button onClick={handleBuyNow}>Mua ngay</button>
    </div>
  );
};

export default ProductDetail;
