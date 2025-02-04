const express = require('express');
const router = express.Router();

const { createKunjungan } = require('../controllers/kunjungan/create');

router.post('/api/ibu-hamil/kunjungan', createKunjungan);

module.exports = router;
