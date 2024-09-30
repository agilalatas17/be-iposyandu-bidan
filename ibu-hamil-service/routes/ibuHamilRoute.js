const express = require('express');
const router = express.Router();
const {
  countIbuHamil,
  getAllIbuHamil,
  getIbuHamilById,
  createIbuHamil,
  updateIbuHamil,
  deleteIbuHamil,
} = require('../controllers/ibuHamilControllers');

router.get('/api/ibu-hamil/jumlah-data', countIbuHamil);
router.get('/api/ibu-hamil', getAllIbuHamil);
router.get('/api/ibu-hamil/:id', getIbuHamilById);
router.post('/api/ibu-hamil', createIbuHamil);
router.put('/api/ibu-hamil/:id', updateIbuHamil);
router.delete('/api/ibu-hamil/:id', deleteIbuHamil);

module.exports = router;
