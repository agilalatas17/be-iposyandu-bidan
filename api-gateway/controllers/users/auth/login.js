const axiosInstance = require('../../../config/axiosInstance');
const jwt = require('jsonwebtoken');
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
    const user = await api.post('/api/auth/login', req.body);
    const data = user.data.data;

    const token = jwt.sign({ data }, JWT_SECRET, {
      expiresIn: JWT_ACCESS_TOKEN_EXPIRED,
    });
    const refreshToken = jwt.sign({ data }, JWT_SECRET_REFRESH_TOKEN, {
      expiresIn: JWT_REFRESH_TOKEN_EXPIRED,
    });

    await api.post('/api/refresh-token', {
      refreshToken: refreshToken,
      bidanId: data.id,
    });

    return res.json({
      status: 'success',
      data: {
        token,
        refreshToken: refreshToken,
      },
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
