import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function Featured() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu sản phẩm từ API chung và chọn một số sản phẩm làm nổi bật
    fetch(`${process.env.REACT_APP_API_URL}/api/products`)
      .then(res => {
        if (!res.ok) {
          console.error('Failed to fetch products:', res.statusText);
          return [];
        }
        return res.json();
      })
      .then(data => {
        console.log('Products data:', data);
        // Chọn 4 sản phẩm đầu tiên làm sản phẩm nổi bật
        const featuredProducts = Array.isArray(data) ? data.slice(0, 4) : [];
        setProducts(featuredProducts);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setProducts([]);
      });
  }, []);

  const goToProductDetail = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <section className="featured" id="featured">
      <h1 className="heading"><span> pet nổi bật</span></h1>

      <Swiper
        className="featured-slider"
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 9500, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          450: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {Array.isArray(products) ? products.map(product => (
          <SwiperSlide key={product.id}>
            <div className="box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye" onClick={() => goToProductDetail(product.id)}></a>
              </div>
              <div className="image">
                <img src={product.image && !product.image.startsWith('http') && !product.image.startsWith('/image/') ? `/image/${product.image}` : product.image} alt={product.name} />
              </div>
              <div className="content">
                <h3>{product.name}</h3>
                <div className="price">{product.price}$ <span>{product.oldPrice ? product.oldPrice + '$' : ''}</span></div>
                <p>{product.description}</p>
                <p>Đánh giá: {product.rating} ★</p>
                <p>Tình trạng: {product.inStock ? 'Còn hàng' : 'Hết hàng'}</p>
                <button className="btn" onClick={() => addToCart(product)}>thêm vào giỏ hàng</button>
              </div>
            </div>
          </SwiperSlide>
        )) : null}
      </Swiper>
    </section>
  );
}

export default Featured;
