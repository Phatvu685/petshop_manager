const { findByEmail, create } = require('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function login(email, password) {
  const user = await findByEmail(email);
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password');

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { token, user: { id: user.id, email: user.email, username: user.username } };
}

async function register({ username, email, password }) {
  const existingUser = await findByEmail(email);
  if (existingUser) throw new Error('Email already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = await create({ username, email, password: hashedPassword });
  return { id: userId, email, username };
}

module.exports = { login, register };