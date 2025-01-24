const express = require('express');
const router = express.Router();

const createRefreshToken = require('../controllers/refresh-token/create');
const getToken = require('../controllers/refresh-token/getToken');

router.post('/api/refresh-token', createRefreshToken);
router.get('/api/get-token', getToken);

module.exports = router;
