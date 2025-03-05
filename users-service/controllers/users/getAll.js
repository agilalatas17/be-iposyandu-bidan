const { BidanModel } = require('../../db/models');

module.exports = async (req, res) => {
  const users = await BidanModel.findAll({
    attributes: ['id', 'nama', 'email', 'no_telp'],
  });

  return res.json({
    status: 'success',
    data: users,
  });
};
