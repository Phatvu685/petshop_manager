import React from 'react';

function IconsContainer() {
  return (
    <section className="icons-container">
      <div className="icons">
        <i className="fas fa-shipping-fast"></i>
        <div className="content">
          <h3>Miễn Phí Vận Chuyển</h3>
          <p>Đặt Hàng Trên 100$</p>
        </div>
      </div>

      <div className="icons">
        <i className="fas fa-lock"></i>
        <div className="content">
          <h3>thanh toán an toàn</h3>
          <p>100% thanh toán an toàn</p>
        </div>
      </div>

      <div className="icons">
        <i className="fas fa-redo-alt"></i>
        <div className="content">
          <h3>dễ dàng hoán đổi</h3>
          <p>10 ngày hoàn trả</p>
        </div>
      </div>

      <div className="icons">
        <i className="fas fa-headset"></i>
        <div className="content">
          <h3>hỗ trợ 24/7</h3>
          <p>gọi chúng tôi bất cứ khi nào </p>
        </div>
      </div>
    </section>
  );
}

export default IconsContainer;

/*
Giải thích:
- Sử dụng function component để tránh lỗi ghi file.
- Đây là component IconsContainer chứa các icon và nội dung mô tả dịch vụ.
- Giữ nguyên cấu trúc và className để áp dụng CSS.
*/
