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

    await ibuHamil.destroy();

    res.send('Berhasil dihapus');
  } catch (err) {
    res.status(400).send(err.message);
  }
};
