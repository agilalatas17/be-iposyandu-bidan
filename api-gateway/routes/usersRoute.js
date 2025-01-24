const express = require('express');
const router = express.Router();
const register = require('../controllers/users/auth/register');
const login = require('../controllers/users/auth/login');

router.post('/api/auth/register', register);
router.post('/api/auth/login', login);

module.exports = router;
