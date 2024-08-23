let express = require('express');
let router = express.Router();

/* GET ibu-hamil listing. */
router.get('/', function (req, res, next) {
  res.send('Ibu Hamil');
});

module.exports = router;
