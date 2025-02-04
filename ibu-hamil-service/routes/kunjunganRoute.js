const express = require('express');
const router = express.Router();

const createKunjungan = require('../controllers/kunjungan/create');
const updateKunjungan = require('../controllers/kunjungan/update');

router.post('/api/ibu-hamil/kunjungan', createKunjungan);
router.put('/api/ibu-hamil/kunjungan/:id', updateKunjungan);

module.exports = router;
