import React, { useState } from 'react';

function LoginForm({ visible, setVisible, onShowRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  if (!visible) return null;

  const closeForm = () => {
    setVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Login failed');
      } else {
        // Lưu token hoặc xử lý đăng nhập thành công
        localStorage.setItem('token', data.token);
        setSuccessMessage('Đăng nhập thành công! Chuyển đến Quản lý đơn hàng...');
        setTimeout(() => {
          setVisible(false);
          // Chuyển hướng hoặc cập nhật giao diện sang Quản lý đơn hàng
          window.location.href = '/user/orders'; // Giả sử đường dẫn quản lý đơn hàng là /user/orders
        }, 1500);
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className={`login-form-container${visible ? ' active' : ''}`}>
      <div id="close-login-btn" className="fas fa-times" onClick={closeForm}></div>

      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <span>Email</span>
        <input
          type="email"
          name="email"
          className="box"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <span>Password</span>
        <input
          type="password"
          name="password"
          className="box"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

        <div className="checkbox">
          <input type="checkbox" name="remember" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <input type="submit" value="Sign in" className="btn" />

        <p>Forgot password? <a href="#">Click here</a></p>
        <p>Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); onShowRegister(); }}>Create one</a></p>
      </form>
    </div>
  );
}

export default LoginForm;
