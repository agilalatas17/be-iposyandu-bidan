const express = require('express');
const router = express.Router();
const {
  jumlahIbuHamil,
  getAllIbuHamil,
  getIbuHamilById,
  createIbuHamil,
  updateIbuHamil,
  deleteIbuHamil,
} = require('../controllers/ibuHamilController');

router.get('/api/ibu-hamil/jumlah-data', jumlahIbuHamil);
router.get('/api/ibu-hamil', getAllIbuHamil);
router.get('/api/ibu-hamil/:id', getIbuHamilById);
router.post('/api/ibu-hamil', createIbuHamil);
router.put('/api/ibu-hamil/:id', updateIbuHamil);
router.delete('/api/ibu-hamil/:id', deleteIbuHamil);

module.exports = router;
