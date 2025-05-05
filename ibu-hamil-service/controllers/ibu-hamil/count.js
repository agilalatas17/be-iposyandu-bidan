const { IbuHamilModel } = require('../../db/models');

module.exports = async (req, res) => {
  try {
    const { bidan_id } = req.query;
    const jumlahIbuHamil = await IbuHamilModel.count({
      where: {
        bidan_id: bidan_id,
      },
    });

    return res.status(200).json({ jumlahIbuHamil });
  } catch (err) {
    res.status(400).json({
      message: 'Gagal mengambil data',
      error: err.message,
    });
  }
};
