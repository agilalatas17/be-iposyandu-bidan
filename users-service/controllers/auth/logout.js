const { BidanModel, RefreshTokenModel } = require('../../db/models');

module.exports = async (req, res) => {
  const bidanId = req.body.bidanId;
  const user = await BidanModel.findByPk(bidanId);

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'user not found',
    });
  }

  await RefreshTokenModel.destroy({
    where: { bidanId: bidanId },
  });

  return res.json({
    status: 'success',
    message: 'refresh token deleted',
  });
};
