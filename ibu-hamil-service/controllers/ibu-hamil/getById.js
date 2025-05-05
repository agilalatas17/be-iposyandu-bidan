const { IbuHamilModel } = require('../../db/models');

module.exports = async (req, res) => {
  const id = req.params.id;

  try {
    const ibuHamilData = await IbuHamilModel.findByPk(id);

    if (!ibuHamilData) {
      return res.status(404).json({
        message: 'Data ibu hamil tidak ditemukan',
      });
    }

    return res.status(200).json({
      message: 'Berhasil mengambil data',
      data: ibuHamilData,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
      message: 'Gagal mengambil data ibu hamil',
    });
  }
};
