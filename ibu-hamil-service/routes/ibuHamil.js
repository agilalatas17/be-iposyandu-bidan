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
  } catch (err) {
    res.status(400).json({
      error: err.message,
      message: 'Gagal mengambil data ibu hamil',
    });
  }
});

// GET By ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;

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
  } catch (err) {
    res.status(400).json({
      error: err.message,
      message: 'Gagal mengambil data ibu hamil',
    });
  }
});

// CREATE
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
    let taksiranPersalinanDate = new Date(hphtDate);
    taksiranPersalinanDate.setDate(hphtDate.getDate() + 280);

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
  } catch (err) {
    return res.status(400).json({
      message: 'Gagal menambahkan data ibu hamil',
      error: err.message,
    });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const ibuHamil = await IbuHamilModel.findByPk(id);

  try {
    if (!ibuHamil) {
      return res.status(404).json({
        status: 'error',
        message: 'data tidak ditemukan',
      });
    }

    let hpht = new Date(req.body.hpht);
    let taksiranPersalinanDate = new Date(hpht);
    taksiranPersalinanDate.setDate(hpht.getDate() + 280);

    const ibuHamilUpdate = await ibuHamil.update({
      tanggalDaftar: req.body.tanggalDaftar,
      nik: req.body.nik,
      nama: req.body.nama,
      hpht,
      taksiranPersalinanDate,
      tempatLahir: req.body.tempatLahir,
      tanggalLahir: req.body.tanggalLahir,
      pendidikanTerakhir: req.body.pendidikanTerakhir,
      pekerjaan: req.body.pekerjaan,
      alamat: req.body.alamat,
      telepon: req.body.telepon,
      golDarah: req.body.golDarah,
      pembiayaan: req.body.pembiayaan,
      noJkn: req.body.noJkn,
      faskes: req.body.faskes,
      faskesRujukan: req.body.faskesRujukan,
    });

    return res.status(200).json({
      message: 'data berhasil diperbarui',
      data: ibuHamilUpdate,
    });
  } catch (err) {
    res.status(400).json({
      message: 'data gagal diperbarui',
      error: err.message,
    });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const ibuHamil = await IbuHamilModel.findByPk(id);

  try {
    if (!ibuHamil) {
      return res.status(404).json({
        status: 'error',
        message: 'data tidak ditemukan',
      });
    }

    await ibuHamil.destroy();

    res.send('Berhasil dihapus');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
