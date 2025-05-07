import React, { useEffect, useState } from 'react';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all orders from backend API
    fetch(`${process.env.REACT_APP_API_URL}/api/orders`)
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

  const updateStatus = (id, newStatus) => {
    // Update order status API call
    fetch(`${process.env.REACT_APP_API_URL}/api/orders/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    })
      .then(res => {
        if (res.ok) {
          setOrders(prevOrders =>
            prevOrders.map(order =>
              order.id === id ? { ...order, status: newStatus } : order
            )
          );
        }
      });
  };

  if (loading) {
    return <div>Đang tải đơn hàng...</div>;
  }

  if (orders.length === 0) {
    return <div>Chưa có đơn hàng nào.</div>;
  }

  return (
    <div className="admin-orders">
      <h2>Quản lý đơn hàng</h2>
      <table>
        <thead>
          <tr>
            <th>Mã đơn</th>
            <th>Người đặt</th>
            <th>Ngày đặt</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
            <th>Cập nhật trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user}</td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
              <td>{order.total} VNĐ</td>
              <td>{order.status}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                >
                  <option value="Đang xử lý">Đang xử lý</option>
                  <option value="Đang giao">Đang giao</option>
                  <option value="Đã giao">Đã giao</option>
                  <option value="Đã hủy">Đã hủy</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
