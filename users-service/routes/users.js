const express = require('express');
const router = express.Router();
const register = require('../controllers/auth/register');
const login = require('../controllers/auth/login');
const logout = require('../controllers/auth/logout');

const getUserById = require('../controllers/users/getUser');
const getAllUser = require('../controllers/users/getAll');

router.post('/api/auth/register', register);
router.post('/api/auth/login', login);
router.post('/api/auth/logout', logout);

router.get('/api/user/:id', getUserById);
router.get('/api/users', getAllUser);

module.exports = router;
