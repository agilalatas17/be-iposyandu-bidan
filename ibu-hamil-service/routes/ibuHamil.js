let express = require('express');
let router = express.Router();

// GET
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// POST
router.post('/tambah-ibu-hamil', (req, res) => {
  const {
    tanggalDaftar,
    nik,
    nama,
    hpht,
    taksiranPersalinan,
    tempatLahir,
    tanggalLahir,
    pendidikanTerakhir,
    pekerjaan,
    alamat,
    telepon,
    golonganDarah,
    pembiayaan,
    noJkn,
    faskes,
    faskesRujukan,
  } = req.body;
});

module.exports = router;
