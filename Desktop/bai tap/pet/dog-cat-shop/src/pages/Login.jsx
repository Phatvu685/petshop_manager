import { useNavigate } from 'react-router-dom';

function Login({ login }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: e.target.email.value,
      name: 'User', // Giả lập, thay bằng logic thực tế nếu có backend
    };
    login(userData);
    navigate('/account');
  };

  return (
    <main className="main-content">
      <div className="container">
        <h2 className="main-title">Login</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Login;