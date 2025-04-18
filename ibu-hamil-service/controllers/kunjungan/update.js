const { KunjunganModel, IbuHamilModel } = require('../../db/models');
const {
  hitungUsiaKehamilan,
  hitungTrimester,
  hitungIndeksMasaTubuh,
} = require('../../utils');

module.exports = async (req, res) => {
  const {
    tanggal_daftar,
    keluhan,
    berat_badan,
    tinggi_badan,
    tekanan_darah,
    detak_jantung_janin,
    kepala_thd_pap,
    taksiran_bb_janin,
    jumlah_janin,
  } = req.body;

  const { id } = req.params;
  const kunjungan = await KunjunganModel.findByPk(id);
  const ibuHamil = await IbuHamilModel.findByPk(kunjungan.ibu_hamil_id);

  try {
    if (!kunjungan) {
      return res.status(404).json({
        status: 'error',
        message: 'data tidak ditemukan',
      });
    }

    let usiaKehamilan, trimester;
    if (tanggal_daftar) {
      // Hitung usia kehamilan
      usiaKehamilan = hitungUsiaKehamilan(ibuHamil.hpht, tanggal_daftar);

      // Tentukan trimester
      trimester = hitungTrimester(usiaKehamilan);
    }

    let imt;
    if (berat_badan && tinggi_badan) {
      imt = hitungIndeksMasaTubuh(berat_badan, tinggi_badan);
    }

    const kunjunganUpdate = await kunjungan.update({
      tanggal_daftar,
      usia_kehamilan: usiaKehamilan,
      trimester_ke: trimester,
      keluhan,
      berat_badan,
      tinggi_badan,
      indeks_masa_tubuh: imt,
      tekanan_darah,
      detak_jantung_janin,
      kepala_thd_pap,
      taksiran_bb_janin,
      jumlah_janin,
    });

    return res.status(200).json({
      message: 'data berhasil diperbarui',
      data: kunjunganUpdate,
    });
  } catch (err) {
    res.status(400).json({
      message: 'data gagal diperbarui',
      error: err.message,
    });
  }
};
