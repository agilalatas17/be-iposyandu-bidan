const express = require('express');
const router = express.Router();
const register = require('../controllers/register');
const login = require('../controllers/login');

router.post('/api/auth/register', register);
router.post('/api/auth/login', login);

module.exports = router;
