const express = require('express');
const router = express.Router();

const ibuHamilHandler = require('./handler/ibuHamil');

router.post('/', ibuHamilHandler.createData);
router.get('/', ibuHamilHandler.getAllData);
router.get('/:id', ibuHamilHandler.getById);
router.put('/:id', ibuHamilHandler.updateData);
router.delete('/:id', ibuHamilHandler.deleteData);

module.exports = router;
