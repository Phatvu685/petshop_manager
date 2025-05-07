import React, { useEffect, useState } from 'react';

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user orders from backend API
    fetch(`${process.env.REACT_APP_API_URL}/api/orders/user`)
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(() => {
        setOrders([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Đang tải đơn hàng...</div>;
  }

  if (orders.length === 0) {
    return <div>Bạn chưa có đơn hàng nào.</div>;
  }

  return (
    <div className="user-orders">
      <h2>Lịch sử đơn hàng</h2>
      <table>
        <thead>
          <tr>
            <th>Mã đơn</th>
            <th>Ngày đặt</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
              <td>{order.total} VNĐ</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrders;
