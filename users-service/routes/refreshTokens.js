const express = require('express');
const router = express.Router();

const createRefreshToken = require('../controllers/refresh-token/create');

router.post('/api/refresh-token', createRefreshToken);

module.exports = router;
