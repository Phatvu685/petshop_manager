import { Link } from 'react-router-dom';

function Account({ user, orders, products, deleteOrder }) {
  if (!user) return <div>Please <Link to="/login">login</Link> to view your account.</div>;

  // Lọc đơn hàng của user hiện tại và chỉ lấy đơn hàng đã thanh toán
  const userOrders = orders.filter(order => order.user_id === user.id && order.status === 'paid');

  // Hàm lấy thông tin sản phẩm theo product_id
  const getProductInfo = (productId) => {
    return products.find(product => product.id === productId);
  };

  return (
    <main className="main-content">
      <div className="container">
        <h2 className="main-title">My Account</h2>
        <div className="account-section">
          <h3>Profile</h3>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Profile updated! (This is a demo)'); }}>
            <input type="text" defaultValue={user.name} placeholder="Name" required />
            <input type="email" defaultValue={user.email} placeholder="Email" required />
            <input type="password" placeholder="New Password" />
            <button type="submit">Update Profile</button>
          </form>
        </div>
        <div className="account-section">
          <h3>Orders</h3>
          {userOrders.length === 0 ? (
            <p>No orders yet. Start shopping!</p>
          ) : (
            <ul>
              {userOrders.map(order => (
                <li key={order.id} style={{ marginBottom: '1rem' }}>
                  <p><strong>Order ID:</strong> {order.id}</p>
                  <p><strong>Date:</strong> {order.date}</p>
                  <p><strong>Status:</strong> {order.status}</p>
                  <p><strong>Total Amount:</strong> ${order.total_amount.toFixed(2)}</p>
                  <p><strong>Items:</strong></p>
                  <ul>
                    {order.items.map((item, index) => {
                      const product = getProductInfo(item.product_id);
                      return (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                          {product && (
                            <>
                              <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                              <span>{product.title}</span>
                            </>
                          )}
                          <span style={{ marginLeft: 'auto' }}>Quantity: {item.quantity}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    onClick={() => deleteOrder(order.id)}
                    style={{
                      marginTop: '0.5rem',
                      backgroundColor: '#ff4d4f',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Xóa
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default Account;
