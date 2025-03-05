const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

const register = require('../controllers/users/auth/register');
const login = require('../controllers/users/auth/login');
const logout = require('../controllers/users/auth/logout');

const getUserById = require('../controllers/users/getUserById');

router.post('/api/auth/register', register);
router.post('/api/auth/login', login);
router.post('/api/auth/logout', verifyToken, logout);

router.get('/api/user', verifyToken, getUserById);

module.exports = router;
