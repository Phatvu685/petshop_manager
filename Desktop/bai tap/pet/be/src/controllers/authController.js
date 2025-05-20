const { login, register } = require('../services/authService');

async function loginHandler(req, res) {
  try {
    const { email, password } = req.body;
    const result = await login(email, password);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function registerHandler(req, res) {
  try {
    const { username, email, password } = req.body;
    const result = await register({ username, email, password });
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { loginHandler, registerHandler };