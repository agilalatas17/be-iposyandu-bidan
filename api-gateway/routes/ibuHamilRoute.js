const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

const jumlahIbuHamil = require('../controllers/ibu-hamil/count');
const getAllIbuHamil = require('../controllers/ibu-hamil/getAll');
const getIbuHamilById = require('../controllers/ibu-hamil/getById');
const createIbuHamil = require('../controllers/ibu-hamil/create');
const updateIbuHamil = require('../controllers/ibu-hamil/update');
const deleteIbuHamil = require('../controllers/ibu-hamil/destroy');

router.get('/api/ibu-hamil/jumlah-data', verifyToken, jumlahIbuHamil);
router.get('/api/ibu-hamil', verifyToken, getAllIbuHamil);
router.get('/api/ibu-hamil/:id', verifyToken, getIbuHamilById);
router.post('/api/ibu-hamil/create', verifyToken, createIbuHamil);
router.put('/api/ibu-hamil/:id', verifyToken, updateIbuHamil);
router.delete('/api/ibu-hamil/:id', verifyToken, deleteIbuHamil);

module.exports = router;
