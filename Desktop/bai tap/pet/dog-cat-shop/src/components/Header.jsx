import { Link, useNavigate } from 'react-router-dom';
import { FaCartPlus, FaUser } from 'react-icons/fa';

function Header({ cartCount, user, logout }) {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    if (query) navigate(`/products?search=${query}`);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img
            src="/image/logo.jpg"
            alt="Pet Shop Logo"
            className="logo-image"
          />
          <h1 className="logo-text">PetShop</h1>
        </div>
        <div className="nav-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="Search products..."
              className="search-bar"
            />
          </form>
          <nav>
            <ul className="nav-list">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/products" className="nav-link">Products</Link></li>
              <li><Link to="/services" className="nav-link">Services</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </nav>
          <Link to="/cart" className="cart-container">
            <FaCartPlus className="cart-icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <Link to={user ? '/account' : '/login'} className="user-container">
            <FaUser className="user-icon" />
          </Link>
          {user && (
            <button onClick={logout} className="nav-link">
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;