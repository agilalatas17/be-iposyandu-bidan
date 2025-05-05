const { IbuHamilModel } = require('../../db/models');

module.exports = async (req, res) => {
  const id = req.params.id;
  const ibuHamil = await IbuHamilModel.findByPk(id);

  try {
    if (!ibuHamil) {
      return res.status(404).json({
        status: 'error',
        message: 'data tidak ditemukan',
      });
    }

    let hpht = req.body.hpht;
    let taksiranPersalinanDate;
    if (hpht) {
      hpht = new Date(hpht);
      taksiranPersalinanDate = new Date(hpht);
      taksiranPersalinanDate.setDate(hpht.getDate() + 280);
    }

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
};
