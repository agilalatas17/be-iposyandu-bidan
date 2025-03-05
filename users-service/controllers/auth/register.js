const bcrypt = require('bcrypt');
const { BidanModel } = require('../../db/models');

module.exports = async (req, res) => {
  try {
    const userEmail = await BidanModel.findOne({
      where: { email: req.body.email },
    });

    const userTelp = await BidanModel.findOne({
      where: { noTelp: req.body.noTelp },
    });

    if (userEmail && userTelp) {
      return res.status(409).json({
        status: 409,
        message: 'Email dan nomor telepon sudah digunakan!',
      });
    }

    if (userEmail) {
      return res.status(409).json({
        status: 409,
        message: 'Email sudah digunakan!',
      });
    }

    if (userTelp) {
      return res.status(409).json({
        status: 409,
        message: 'Nomor telepon sudah digunakan!',
      });
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const createUser = await BidanModel.create({
      nama: req.body.nama,
      email: req.body.email,
      noTelp: req.body.noTelp,
      password,
    });

    return res.status(201).json({
      message: 'Berhasil daftar',
      status: 201,
      data: {
        id: createUser,
      },
    });
  } catch (err) {
    return res.status(400).json({
      message: 'Gagal mendaftarkan akun',
      error: err.message,
    });
  }
};
