const express = require('express');
const router = express.Router();

const jumlahIbuHamil = require('../controllers/ibu-hamil/count');
const getAllIbuHamil = require('../controllers/ibu-hamil/getAll');
const getIbuHamilById = require('../controllers/ibu-hamil/getById');
const createIbuHamil = require('../controllers/ibu-hamil/create');
const updateIbuHamil = require('../controllers/ibu-hamil/update');
const deleteIbuHamil = require('../controllers/ibu-hamil/destroy');

router.get('/api/ibu-hamil/jumlah-data', jumlahIbuHamil);
router.get('/api/ibu-hamil', getAllIbuHamil);
router.get('/api/ibu-hamil/:id', getIbuHamilById);
router.post('/api/ibu-hamil', createIbuHamil);
router.put('/api/ibu-hamil/:id', updateIbuHamil);
router.delete('/api/ibu-hamil/:id', deleteIbuHamil);

module.exports = router;
