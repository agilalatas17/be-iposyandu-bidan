const { KunjunganModel } = require('../../db/models');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const kunjunganData = await KunjunganModel.findByPk(id);

    if (!kunjunganData) {
      return res.status(404).json({
        message: 'Data kunjungan ibu hamil tidak ditemukan',
      });
    }

    return res.status(200).json({
      message: 'Berhasil mengambil data',
      data: kunjunganData,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
      message: 'Gagal mengambil data kunjungan ibu hamil',
    });
  }
};
