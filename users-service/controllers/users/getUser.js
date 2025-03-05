const { BidanModel } = require('../../db/models');

module.exports = async (req, res) => {
  const { id } = req.params;

  const user = await BidanModel.findByPk(id, {
    attributes: ['id', 'nama', 'email', 'no_telp'],
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'User not found!',
    });
  }

  return res.json({
    status: 'success',
    data: user,
  });
};
