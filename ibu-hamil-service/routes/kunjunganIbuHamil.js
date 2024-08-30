let express = require('express');
let router = express.Router();

const { KunjunganModel, IbuHamilModel } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    let newKunjungan = await KunjunganModel.create({
      tanggalKunjungan: req.body.tanngalKunjungan,
      usiaKehamilan: req.body.usiaKehamilan,
      trimesterKe: req.body.trimesterKe,
    });

    res.status(200).json({
      message: 'Berhasil menambahkan data kunjungan',
      data: newKunjungan,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Gagal menambah data kunjungan ibu hamil',
      error: err.message,
    });
  }
});

module.exports = router;
