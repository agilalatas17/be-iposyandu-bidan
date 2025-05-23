const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

const jumlahIbuHamil = require('../controllers/ibu-hamil/count');
const getAllIbuHamil = require('../controllers/ibu-hamil/getAll');
const getIbuHamilById = require('../controllers/ibu-hamil/getById');
const createIbuHamil = require('../controllers/ibu-hamil/create');
const updateIbuHamil = require('../controllers/ibu-hamil/update');
const deleteIbuHamil = require('../controllers/ibu-hamil/destroy');

const createKunjungan = require('../controllers/ibu-hamil/kunjungan/create');
const getAllKunjungan = require('../controllers/ibu-hamil/kunjungan/getAll');
const getKunjunganById = require('../controllers/ibu-hamil/kunjungan/getById');
const updateKunjungan = require('../controllers/ibu-hamil/kunjungan/update');
const deleteKunjungan = require('../controllers/ibu-hamil/kunjungan/destroy');

// With JWT
router.get('/api/ibu-hamil/jumlah-data', verifyToken, jumlahIbuHamil);
router.get('/api/ibu-hamil', verifyToken, getAllIbuHamil);
router.get('/api/ibu-hamil/:id', verifyToken, getIbuHamilById);
router.post('/api/ibu-hamil/create', verifyToken, createIbuHamil);
router.put('/api/ibu-hamil/:id', verifyToken, updateIbuHamil);
router.delete('/api/ibu-hamil/:id', verifyToken, deleteIbuHamil);

router.get(
  '/api/ibu-hamil/:ibu_hamil_id/kunjungan',
  verifyToken,
  getAllKunjungan
);
router.post('/api/ibu-hamil/kunjungan', verifyToken, createKunjungan);
router.get('/api/ibu-hamil/kunjungan/:id', verifyToken, getKunjunganById);
router.put('/api/ibu-hamil/kunjungan/:id', verifyToken, updateKunjungan);
router.delete('/api/ibu-hamil/kunjungan/:id', verifyToken, deleteKunjungan);

// NON JWT
// router.get('/api/ibu-hamil/jumlah-data', jumlahIbuHamil);
// router.get('/api/ibu-hamil', getAllIbuHamil);
// router.get('/api/ibu-hamil/:id', getIbuHamilById);
// router.post('/api/ibu-hamil/create', createIbuHamil);
// router.put('/api/ibu-hamil/:id', updateIbuHamil);
// router.delete('/api/ibu-hamil/:id', deleteIbuHamil);

// router.get('/api/ibu-hamil/:ibu_hamil_id/kunjungan', getAllKunjungan);
// router.post('/api/ibu-hamil/kunjungan', createKunjungan);
// router.get('/api/ibu-hamil/kunjungan/:id', getKunjunganById);
// router.put('/api/ibu-hamil/kunjungan/:id', updateKunjungan);
// router.delete('/api/ibu-hamil/kunjungan/:id', deleteKunjungan);

module.exports = router;
