import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import Featured from './components/Featured';
import Deal from './components/Deal';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import IconsContainer from './components/IconsContainer';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';

import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';
import UserOrders from './components/UserOrders';
import AdminOrders from './components/AdminOrders';

function App() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  const showRegister = () => {
    setLoginVisible(false);
    setRegisterVisible(true);
  };

  const showLogin = () => {
    setRegisterVisible(false);
    setLoginVisible(true);
  };

  const toggleCartVisible = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <CartProvider>
      <Router>
        <Header setLoginVisible={setLoginVisible} toggleCartVisible={toggleCartVisible} />
        <Navbar />
        <LoginForm visible={loginVisible} setVisible={setLoginVisible} onShowRegister={showRegister} />
        <RegisterForm visible={registerVisible} setVisible={setRegisterVisible} onShowLogin={showLogin} />
        {cartVisible && <Cart />}
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Featured />
              <Deal />
              <Reviews />
              <Blog />
              <IconsContainer />
            </>
          } />
          <Route path="/products" element={<ProductCatalog />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/orders" element={<UserOrders />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
