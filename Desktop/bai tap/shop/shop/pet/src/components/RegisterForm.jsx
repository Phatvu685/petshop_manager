import React, { useState } from 'react';

function RegisterForm({ visible, setVisible, onShowLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  if (!visible) return null;

  const closeForm = () => {
    setVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError('Password và Confirm Password không khớp');
      return;
    }
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Register failed');
      } else {
        setVisible(false);
        onShowLogin();
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className={`register-form-container${visible ? ' active' : ''}`}>
      <div id="close-register-btn" className="fas fa-times" onClick={closeForm}></div>

      <form onSubmit={handleSubmit}>
        <h3>Register</h3>

        <span>Username</span>
        <input
          type="text"
          name="username"
          className="box"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

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

        <span>Confirm Password</span>
        <input
          type="password"
          name="confirmPassword"
          className="box"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <input type="submit" value="Register" className="btn" />

        <p>Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); onShowLogin(); }}>Sign in</a></p>
      </form>
    </div>
  );
}

export default RegisterForm;
