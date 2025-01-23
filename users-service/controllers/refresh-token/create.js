const { BidanModel, RefreshTokenModel } = require('../../db/models');
const Validator = require('fastest-validator');

module.exports = async (req, res) => {
  const v = new Validator();
  const bidanId = req.body.bidanId;
  const refreshToken = req.body.refresh_token;

  const schema = {
    refreshTokena: 'string',
    bidanId: 'number',
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate,
    });
  }

  const user = await BidanModel.findByPk(bidanId);
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'Pengguna tidak ada!',
    });
  }

  const createRefreshToken = await RefreshTokenModel.create({
    token: refreshToken,
    bidanId: bidanId,
  });

  return res.json({
    status: 'success',
    data: {
      id: createRefreshToken.id,
    },
  });
};
