const { IbuHamilModel } = require('../../db/models');

module.exports = async (req, res) => {
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
    bidan_id,
  } = req.body;

  try {
    const existingData = await IbuHamilModel.findOne({ where: { nik } });
    if (existingData) {
      return res.json({
        status: 409,
        message: 'Data dengan NIK ini sudah ada',
      });
    }

    // taksiran persalinan
    let hphtDate = new Date(hpht);
    let hitungTaksiranPersalinanDate = new Date(hphtDate);
    hitungTaksiranPersalinanDate.setDate(hphtDate.getDate() + 280);

    const newIbuHamil = await IbuHamilModel.create({
      tanggalDaftar,
      nik,
      nama,
      hpht,
      taksiranPersalinanDate: hitungTaksiranPersalinanDate,
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
      bidan_id,
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
};
