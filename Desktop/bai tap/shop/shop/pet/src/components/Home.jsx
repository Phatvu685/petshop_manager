import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCatalog from './ProductCatalog';
import Navbar from './Navbar';
import Cart from './Cart';

const Home = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(prev => !prev);
  };

  return (
    <>
      <Navbar toggleCart={toggleCart} />
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>giảm tới 75%</h3>
            <p>pet đẹp, ngoan, dễ nuôi Đừng bỏ lỡ cơ hội mua pet đẹp chất lượng !.</p>

            <a href="#" className="btn">mua ngay</a>
          </div>

          <Swiper
            className="books-slider"
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          >
            <SwiperSlide><a href="#"><img src="image/banner1.jpg" alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="#"><img src="image/banner2.jpg" alt="" /></a></SwiperSlide>
          </Swiper>
        </div>
      </section>
      <ProductCatalog />
      {isCartVisible && <Cart />}
    </>
  );
};

export default Home;

/*
Giải thích:
- Sử dụng Swiper React component để khởi tạo slider thay vì cấu trúc HTML thuần.
- Cấu hình các thuộc tính như spaceBetween, slidesPerView, loop, autoplay và breakpoints tương tự script.js gốc.
- Giữ nguyên className để áp dụng CSS.
- Giữ ảnh và nút mua ngay như template gốc.
*/
