const { KunjunganModel } = require('../../db/models');

module.exports = async (req, res) => {
  const id = req.params.id;
  const kunjungan = await KunjunganModel.findByPk(id);

  try {
    if (!kunjungan) {
      return res.status(404).json({
        status: 'error',
        message: 'data tidak ditemukan',
      });
    }

    await kunjungan.destroy();

    res.send('Berhasil dihapus');
  } catch (err) {
    res.status(400).send(err.message);
  }
};
