const express = require('express');
const router = express.Router();

const createKunjungan = require('../controllers/kunjungan/create');
const updateKunjungan = require('../controllers/kunjungan/update');
const deleteKunjungan = require('../controllers/kunjungan/destroy');

router.post('/api/ibu-hamil/kunjungan', createKunjungan);
router.put('/api/ibu-hamil/kunjungan/:id', updateKunjungan);
router.delete('/api/ibu-hamil/kunjungan/:id', deleteKunjungan);

module.exports = router;
