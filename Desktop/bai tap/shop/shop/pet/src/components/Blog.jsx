import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function BlogDetail({ blog, onClose }) {
  if (!blog) return null;
  return (
    <div className="blog-detail">
      <div className="blog-detail-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="image">
          <img src={blog.img} alt={blog.title} />
        </div>
        <h3>{blog.title}</h3>
        <p>{blog.details}</p>
      </div>
    </div>
  );
}

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      img: "image/shop.jpg",
      title: "tiêu đề blog ở đây",
      summary: "Tại sao bạn chọn Shop  chúng tôi?",
      details: "Chi tiết bài blog 1: Shop chúng tôi cung cấp các sản phẩm chất lượng cao, dịch vụ tận tâm và giá cả hợp lý. Khách hàng luôn hài lòng với trải nghiệm mua sắm tại đây."
    },
    {
      id: 2,
      img: "image/b.jpg",
      title: "tiêu đề blog ở đây",
      summary: "ly do pet cưng bị bệnh",
      details: "Chi tiết bài blog 2: Pet cưng có thể bị bệnh do nhiều nguyên nhân như môi trường sống, chế độ ăn uống, và chăm sóc không đúng cách. Chúng tôi cung cấp các giải pháp chăm sóc sức khỏe cho pet."
    },
    {
      id: 3,
      img: "image/m.jpg",
      title: "tiêu đề blog ở đây",
      summary: "nên mua pet cung thuần chủng",
      details: "Chi tiết bài blog 3: Mua pet cung thuần chủng giúp bạn có được thú cưng khỏe mạnh, có nguồn gốc rõ ràng và dễ dàng chăm sóc hơn. Chúng tôi cam kết cung cấp pet thuần chủng chất lượng."
    }
  ];

  const toggleDetail = (blog) => {
    if (selectedBlog && selectedBlog.id === blog.id) {
      setSelectedBlog(null);
    } else {
      setSelectedBlog(blog);
    }
  };

  return (
    <section className="blog" id="blog">
      <h1 className="heading"><span>blog của chúng tôi</span></h1>

      <Swiper
        className="blogs-slider"
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
        {blogs.map(blog => (
          <SwiperSlide key={blog.id}>
            <div className="box" onClick={() => toggleDetail(blog)} style={{ cursor: 'pointer' }}>
              <div className="image">
                <img src={blog.img} alt={blog.title} />
              </div>
              <div className="content">
                <h3>{blog.title}</h3>
                <p>{blog.summary}</p>
                <a href="#" className="btn" onClick={(e) => e.preventDefault()}>đọc thêm</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <BlogDetail blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
    </section>
  );
}

export default Blog;
