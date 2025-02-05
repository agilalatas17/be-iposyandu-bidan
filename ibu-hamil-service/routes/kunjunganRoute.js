const express = require('express');
const router = express.Router();

const getAllKunjungan = require('../controllers/kunjungan/getAll.js');
const createKunjungan = require('../controllers/kunjungan/create');
const updateKunjungan = require('../controllers/kunjungan/update');
const deleteKunjungan = require('../controllers/kunjungan/destroy');

router.get('/api/ibu-hamil/:ibu_hamil_id/kunjungan', getAllKunjungan);
router.post('/api/ibu-hamil/kunjungan', createKunjungan);
router.put('/api/ibu-hamil/kunjungan/:id', updateKunjungan);
router.delete('/api/ibu-hamil/kunjungan/:id', deleteKunjungan);

module.exports = router;
