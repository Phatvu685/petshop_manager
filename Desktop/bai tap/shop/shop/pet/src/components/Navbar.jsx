import React from 'react';

const Navbar = ({ onCartClick }) => {
  return (
    <nav className="button-navbar">
      <a href="#home" className="fas fa-home"></a>
      <a href="#featured" className="fas fa-list"></a>
      <a href="#product" className="fas fa-tags"></a>
      <a href="#reviews" className="fas fa-comments"></a>
      <a href="#blogs" className="fas fa-blogs"></a>
      <button
        className="fas fa-shopping-cart"
        onClick={onCartClick}
        style={{ cursor: 'pointer', background: 'none', border: 'none', fontSize: '1.2rem' }}
        aria-label="Toggle Cart"
        type="button"
      />
    </nav>
  );
};

export default Navbar;
