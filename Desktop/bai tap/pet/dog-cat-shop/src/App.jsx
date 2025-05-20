  import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [user, setUser] = useState(null);
  const [products] = useState([
    {
      id: 1,
      title: 'Chó Phóc',
      image: '/image/phoc.jpg',
      price: 15.0,
      category: 'dog',
      brand: 'Chó',
      rating: 4.5,
      inStock: true,
      quantity: 100,
    },
    {
      id: 2,
      title: 'Chó Husky',
      image: '/image/husky.jpg',
      price: 10.0,
      category: 'dog',
      brand: 'Chó',
      rating: 4.8,
      inStock: true,
      quantity: 100,
    },
    {
      id: 3,
      title: 'Mèo Ba Tư',
      image: '/image/meobatu.jpg',
      price: 15.0,
      category: 'cat',
      brand: 'Mèo',
      rating: 4.7,
      inStock: true,
      quantity: 100,
    },
    {
      id: 4,
      title: 'Mèo Lông Dài',
      image: '/image/meolongdai.jpg',
      price: 15.0,
      category: 'cat',
      brand: 'Mèo',
      rating: 4.6,
      inStock: true,
      quantity: 100,
    },
  ]);

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product) => {
    console.log('addToCart called with product:', product);
    setCart((prevCart) => {
      const userId = user ? user.id : 1;
      const existingIndex = prevCart.findIndex(
        (item) => item.product_id === product.id && item.user_id === userId
      );
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        console.log('Incremented quantity for product:', product.id);
        return updatedCart;
      } else {
        console.log('Added new product to cart:', product.id);
        return [...prevCart, { product_id: product.id, quantity: 1, user_id: userId }];
      }
    });
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  // Thêm hàm placeOrder để cập nhật orders và xóa giỏ hàng của user
  const placeOrder = (orderDetails, userCart) => {
    // Thêm đơn hàng mới vào orders
    setOrders((prevOrders) => [
      ...prevOrders,
      {
        id: prevOrders.length + 1,
        date: new Date().toLocaleDateString(),
        status: orderDetails.status,
        total_amount: orderDetails.total_amount,
        items: userCart.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
        })),
        user_id: orderDetails.user_id,
        shipping_address: orderDetails.shipping_address,
        phone: orderDetails.phone,
        payment_method: orderDetails.payment_method,
      },
    ]);

    // Xóa các sản phẩm trong giỏ hàng của user
    setCart((prevCart) =>
      prevCart.filter((item) => item.user_id !== orderDetails.user_id)
    );
  };

  const deleteOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header cartCount={cart.length} user={user} logout={logout} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateCart={updateCart}
                products={products}
                user={user}
                placeOrder={placeOrder}
              />
            }
          />
          <Route path="/account" element={<Account user={user} orders={orders} products={products} deleteOrder={deleteOrder} />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/register" element={<Register login={login} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
