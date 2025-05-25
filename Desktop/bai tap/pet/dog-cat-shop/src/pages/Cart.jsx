import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CheckoutForm({ cart, products, user, placeOrder }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Please login to proceed with payment.');
      return;
    }

    setLoading(true);
    const userCart = cart.filter((c) => c.user_id === user.id);
    const total = userCart.reduce(
      (sum, item) => {
        const product = products.find((p) => p.id === item.product_id);
        return sum + (product ? product.price * item.quantity : 0);
      },
      0
    );
    const shipping = total > 50 ? 0 : 5;

    try {
  
      placeOrder(
        {
          user_id: user.id,
          total_amount: total + shipping,
          shipping_address: e.target.address.value,
          phone: e.target.phone.value,
          payment_method: 'Cash', 
          status: 'paid',
        },
        userCart
      );
      toast.success('Payment successful!');
    } catch (err) {
      setError('Failed to process payment.');
      toast.error('Failed to process payment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Shipping Address
          <input type="text" name="address" placeholder="Enter your address" required />
        </label>
        <label>
          Phone Number
          <input type="text" name="phone" placeholder="Enter your phone" required />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Thanh toán'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

function Cart({ cart, updateCart, products, user, placeOrder }) {
  const updateQuantity = (index, quantity) => {
    if (quantity < 1) return;
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    updateCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  
  const userCart = user ? cart.filter((c) => c.user_id === user.id) : cart.filter((c) => c.user_id === 1);

  const total = userCart.reduce(
    (sum, item) => {
      const product = products.find((p) => p.id === item.product_id);
      return sum + (product ? product.price * item.quantity : 0);
    },
    0
  );
  const shipping = total > 50 ? 0 : 5;

  return (
    <main className="main-content">
      <div className="container">
        <h2 className="main-title">Your Cart</h2>
        {userCart.length === 0 ? (
          <p className="main-text">Cart is empty</p>
        ) : (
          <>
            {userCart.map((item, index) => {
              const product = products.find((p) => p.id === item.product_id);
              return product ? (
                <div key={index} className="cart-item">
                  <img src={product.image} alt={product.title} />
                  <div>
                    <h4>{product.title}</h4>
                    <p>${product.price.toFixed(2)}</p>
                  </div>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                    min="1"
                  />
                  <button className="card-button" onClick={() => removeItem(index)}>
                    Remove
                  </button>
                </div>
              ) : null;
            })}
            <div className="cart-total">
              <p>Subtotal: ${total.toFixed(2)}</p>
              <p>Shipping: ${shipping.toFixed(2)}</p>
              <p>Total: ${(total + shipping).toFixed(2)}</p>
            </div>
            <CheckoutForm cart={cart} products={products} user={user} placeOrder={placeOrder} />
          </>
        )}
      </div>
    </main>
  );
}

export default Cart;
