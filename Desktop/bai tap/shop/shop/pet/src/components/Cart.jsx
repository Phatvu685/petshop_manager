import React from 'react';
import { useCart } from '../contexts/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = cartItems.length > 0 ? 20 : 0; // Phí vận chuyển 20 VNĐ nếu có sản phẩm
  const grandTotal = totalAmount + shippingFee;

  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Thương hiệu: {item.brand}</p>
                  <p>Giá: {item.price} VNĐ</p>
                  {item.description && <p>Mô tả: {item.description}</p>}
                  {item.rating !== undefined && <p>Đánh giá: {item.rating} ★</p>}
                  {item.inStock !== undefined && <p>Tình trạng: {item.inStock ? 'Còn hàng' : 'Hết hàng'}</p>}
                  <pre>{JSON.stringify(item, null, 2)}</pre>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">Xóa</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Tổng tiền hàng: {totalAmount} VNĐ</p>
            <p>Phí vận chuyển: {shippingFee} VNĐ</p>
            <h3>Tổng cộng: {grandTotal} VNĐ</h3>
            <button className="checkout-btn">Thanh toán</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
