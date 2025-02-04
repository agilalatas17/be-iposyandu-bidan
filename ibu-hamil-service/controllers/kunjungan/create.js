const { IbuHamilModel, KunjunganModel } = require('../../db/models');
const {
  hitungUsiaKehamilan,
  hitungTrimester,
  hitungIndeksMasaTubuh,
} = require('../../utils');

const createKunjungan = async (req, res) => {
  try {
    const {
      ibu_hamil_id,
      tanggal_daftar,
      berat_badan,
      tinggi_badan,
      tekanan_darah,
      keluhan,
    } = req.body;
    let ibuHamil = await IbuHamilModel.findByPk(ibu_hamil_id);
    if (!ibuHamil) {
      throw new Error('Ibu hamil tidak ditemukan');
    }

    // Hitung usia kehamilan
    const usiaKehamilan = hitungUsiaKehamilan(ibuHamil.hpht, tanggal_daftar);

    // Tentukan trimester
    const trimester = hitungTrimester(usiaKehamilan);

    // IMT
    const imt = hitungIndeksMasaTubuh(berat_badan, tinggi_badan);

    const newKunjungan = await KunjunganModel.create({
      ibu_hamil_id,
      tanggal_daftar,
      usia_kehamilan: usiaKehamilan,
      trimester_ke: trimester,
      keluhan,
      berat_badan,
      tinggi_badan,
      indeks_masa_tubuh: imt,
      tekanan_darah,
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
};

module.exports = {
  createKunjungan,
};
