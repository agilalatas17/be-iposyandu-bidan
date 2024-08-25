let express = require('express');
let router = express.Router();

// GET
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// POST
router.post('/', (req, res) => {
  const nama = req.body.nama;
});

module.exports = router;
