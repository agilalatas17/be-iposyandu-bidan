const jwt = require('jsonwebtoken');
const axiosInstance = require('../../../config/axiosInstance');
const {
  BASE_URL_USERS_SERVICE,
  JWT_SECRET,
  JWT_SECRET_REFRESH_TOKEN,
  JWT_ACCESS_TOKEN_EXPIRED,
  JWT_REFRESH_TOKEN_EXPIRED,
} = process.env;
const api = axiosInstance(BASE_URL_USERS_SERVICE);

module.exports = async (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;
    // const email = req.body.email;
    const noTelp = req.body.noTelp;

    if (!refreshToken || !noTelp) {
      return res.status(400).json({
        status: 'error',
        message: 'invalid token',
      });
    }

    await api.get('/api/get-token', {
      params: { refreshToken: refreshToken },
    });

    jwt.verify(refreshToken, JWT_SECRET_REFRESH_TOKEN, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          status: 'error',
          message: err.message,
        });
      }

      if (noTelp !== decoded.data.noTelp) {
        return res.status(400).json({
          status: 'error',
          message: 'nomor telepon tidak valid',
        });
      }

      const token = jwt.sign({ data: decoded.data }, JWT_SECRET, {
        expiresIn: JWT_ACCESS_TOKEN_EXPIRED,
      });
      return res.json({
        status: 'success',
        data: {
          token,
        },
      });
    });
  } catch (err) {
    if (err.code === 'ECONNREFUSED') {
      return res
        .status(500)
        .json({ status: 'error', message: 'service unavailable' });
    }

    const { status, data } = err.response;
    return res.status(status).json(data);
  }
};
