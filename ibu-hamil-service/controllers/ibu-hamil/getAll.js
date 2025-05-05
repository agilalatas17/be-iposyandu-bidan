const { IbuHamilModel } = require('../../db/models');

module.exports = async (req, res) => {
  try {
    const { bidan_id } = req.query;

    const ibuHamilData = await IbuHamilModel.findAll({
      where: {
        bidan_id: bidan_id,
      },
    });

    return res.status(200).json({
      message: 'Data ibu hamil berhasil diambil',
      data: ibuHamilData,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
      message: 'Gagal mengambil data ibu hamil',
    });
  }
};
