import React from 'react';

const Deal = () => {
  return (
    <section className="deal">
      <div className="content">
        <h3>giao dịch trong ngày</h3>
        <h1>lên tới 70%</h1>
        <p>hãy ghé đến shop chúng tôi</p>
        <a href="#" className="btn">mua ngay</a>
      </div>

      <div className="image">
        <img src="image/0.jpg" alt="" />
      </div>
    </section>
  );
};

export default Deal;

/*
Giải thích:
- Đây là component Deal, hiển thị phần giao dịch trong ngày với nội dung khuyến mãi.
- Bao gồm phần nội dung và ảnh minh họa.
- Giữ nguyên cấu trúc và className để áp dụng CSS.
- Ảnh lấy từ thư mục public/image.
*/
