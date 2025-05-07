import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Reviews() {
  const [selectedReview, setSelectedReview] = useState(null);

  const reviews = [
    {
      id: 1,
      img: "image/n1.jpg",
      name: "ngọc",
      text: "mèo rất xinh!",
      stars: 4.5,
      details: "Mèo rất xinh, dễ thương và thân thiện. Tôi rất hài lòng với sản phẩm và dịch vụ của shop."
    },
    {
      id: 2,
      img: "image/n2.jpg",
      name: "nhi",
      text: "bé cún rất đẹp!",
      stars: 4.5,
      details: "Bé cún rất đẹp, khỏe mạnh và dễ chăm sóc. Shop giao hàng nhanh và đóng gói cẩn thận."
    },
    {
      id: 3,
      img: "image/n3.jpg",
      name: "thi",
      text: "Tôi không ngờ shop có những quyển sách tuyệt vời!",
      stars: 4.5,
      details: "Sách rất hay và bổ ích, chất lượng giấy tốt. Tôi sẽ tiếp tục ủng hộ shop trong tương lai."
    }
  ];

  const closeDetail = () => {
    setSelectedReview(null);
  };

  return (
    <section className="reviews" id="reviews">
      <h1 className="heading"><span>đánh giá của khách hàng</span></h1>
      <Swiper
        className="reviews-slider"
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 9500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map(review => (
          <SwiperSlide key={review.id}>
            <div className="box" onClick={() => setSelectedReview(review)} style={{ cursor: 'pointer' }}>
              <img src={review.img} alt={review.name} />
              <h3>{review.name}</h3>
              <p>{review.text}</p>
              <div className="stars">
                {Array.from({ length: Math.floor(review.stars) }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
                {review.stars % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedReview && (
        <div className="review-detail">
          <div className="review-detail-content">
            <button className="close-btn" onClick={closeDetail}>X</button>
            <img src={selectedReview.img} alt={selectedReview.name} />
            <h3>{selectedReview.name}</h3>
            <p>{selectedReview.details}</p>
            <div className="stars">
              {Array.from({ length: Math.floor(selectedReview.stars) }).map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
              {selectedReview.stars % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Reviews;
