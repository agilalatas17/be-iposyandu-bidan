const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const { BidanModel } = require('../../db/models');

module.exports = async (req, res) => {
  const v = new Validator();

  const schema = {
    noTelp: 'string|empty:false',
    password: 'string|min:6',
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate,
    });
  }

  const user = await BidanModel.findOne({
    where: { noTelp: req.body.noTelp },
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'Pengguna tidak ditemukan',
    });
  }

  // ngecek password
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isValidPassword) {
    return res.status(404).json({
      status: 'error',
      message: 'Pengguna tidak ditemukan',
    });
  }

  res.json({
    status: 'success',
    data: {
      id: user.id,
      nama: user.nama,
      email: user.email,
      noTelp: user.noTelp,
    },
  });
};
