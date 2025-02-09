const { KunjunganModel, IbuHamilModel } = require('../../db/models');

module.exports = async (req, res) => {
  try {
    const { ibu_hamil_id } = req.params;
    if (!ibu_hamil_id) {
      return res.status(400).json({
        message: 'ID ibu hamil diperlukan',
      });
    }

    // Cek keberadaan ibu hamil
    const ibuHamil = await IbuHamilModel.findByPk(ibu_hamil_id);
    if (!ibuHamil) {
      return res.status(404).json({
        message: 'Ibu hamil tidak ditemukan',
      });
    }

    const kunjunganData = await KunjunganModel.findAll({
      where: { ibu_hamil_id }, // Kondisi pencarian berdasarkan ibu_hamil_id
    });

    if (!kunjunganData || kunjunganData.length === 0) {
      return res.status(404).json({
        message: 'Data kunjungan tidak tersedia.',
      });
    }

    return res.status(200).json({
      message: 'Data kunjungan ibu hamil berhasil diambil',
      data: kunjunganData,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
      message: 'Gagal mengambil data kunjungan ibu hamil',
    });
  }
};
