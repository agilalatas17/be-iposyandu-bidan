let express = require('express');
let router = express.Router();
const { IbuHamilModel } = require('../db/models');

// GET ALL
router.get('/', async (req, res, next) => {
  try {
    const ibuHamilList = await IbuHamilModel.findAll();

    return res.status(200).json({
      message: 'Data ibu hamil berhasil diambil',
      data: ibuHamilList,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: 'Gagal mengambil data ibu hamil',
    });
  }
});

// GET By ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const ibuHamil = await IbuHamilModel.findByPk(id);

    if (!ibuHamil) {
      return res.status(404).json({
        message: 'Data ibu hamil tidak ditemukan',
      });
    }

    return res.status(200).json({
      message: 'Berhasil',
      data: ibuHamil,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: 'Gagal mengambil data ibu hamil',
    });
  }
});

// POST
router.post('/', async (req, res) => {
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
