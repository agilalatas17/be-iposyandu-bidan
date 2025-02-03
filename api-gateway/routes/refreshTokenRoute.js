const express = require('express');
const router = express.Router();
const refreshToken = require('../controllers/users/refresh-token/refreshToken');

router.post('/api/refresh-token', refreshToken);

module.exports = router;
