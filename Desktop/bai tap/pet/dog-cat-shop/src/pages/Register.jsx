import { useNavigate } from 'react-router-dom';

function Register({ login }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: e.target.email.value,
      name: e.target.name.value,
    };
    login(userData);
    navigate('/account');
  };

  return (
    <main className="main-content">
      <div className="container">
        <h2 className="main-title">Register</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Register</button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Register;