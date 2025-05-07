const express = require('express');
const router = express.Router();
const { loginHandler, registerHandler } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/login', loginHandler);
router.post('/register', registerHandler);
router.get('/profile', authMiddleware, (req, res) => res.json(req.user));

module.exports = router;