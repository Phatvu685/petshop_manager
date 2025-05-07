import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setLoginVisible, toggleCartVisible }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSearchActive(false);
      if (window.scrollY > 0) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    if (window.scrollY > 80) {
      setHeaderActive(true);
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-1">
        <Link to="/" className="logo"><i className="fas fa-paw"></i> PETSHOP</Link>

        <form action="" className={`search-form${searchActive ? ' active' : ''}`}>
          <input type="search" name="" placeholder="Search here..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>

        <div className="icons">
          <div id="search-btn" className="fas fa-search" onClick={() => setSearchActive(!searchActive)}></div>
          <a href="#" className="fas fa-heart"></a>
          <a href="#" id="cart-btn" className="fas fa-shopping-cart" onClick={toggleCartVisible}></a>
          <div id="login-btn" className="fas fa-user" onClick={() => setLoginVisible(true)}></div>
        </div>
      </div>

      <div className={`header-2${headerActive ? ' active' : ''}`}>
        <nav className="navbar">
          <Link to="/">home</Link>
          <Link to="/#featured">featured</Link>
          <Link to="/products">product</Link>
          <Link to="/#reviews">reviews</Link>
          <Link to="/#blog">blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
