let express = require('express');
let router = express.Router();
let Validator = require('fastest-validator');

const { IbuHamilModel } = require('../db/models');

const validator = new Validator();

// GET
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// POST
router.post('/', async (req, res) => {
  const schema = {
    id: {
      type: 'uuid',
      nullable: false,
    },
    nama: {
      type: 'string',
      max: 255,
      nullable: false,
    },
  };
  let {
    tanggalDaftar,
    nik,
    nama,
    hpht,
    tempatLahir,
    tanggalLahir,
    pendidikanTerakhir,
    pekerjaan,
    alamat,
    telepon,
    golDarah,
    pembiayaan,
    noJkn,
    faskes,
    faskesRujukan,
  } = req.body;

  try {
    const existingData = await IbuHamilModel.findOne({ where: { nik } });
    if (existingData) {
      return res.status(400).json({ message: 'Data dengan NIK ini sudah ada' });
    }

    // taksiran persalinan
    let hphtDate = new Date(hpht);
    let taksiranPersalinanDate = new Date(
      hphtDate.getTime() + 90 * 24 * 60 * 60 * 1000
    );

    let newIbuHamil = await IbuHamilModel.create({
      tanggalDaftar,
      nik,
      nama,
      hpht,
      taksiranPersalinanDate,
      tempatLahir,
      tanggalLahir,
      pendidikanTerakhir,
      pekerjaan,
      alamat,
      telepon,
      golDarah,
      pembiayaan,
      noJkn,
      faskes,
      faskesRujukan,
    });

    return res.status(201).json({
      message: 'Data ibu hamil berhasil ditambahkan',
      data: newIbuHamil,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Gagal menambahkan data ibu hamil',
      error: error.message,
    });
  }
});

module.exports = router;
