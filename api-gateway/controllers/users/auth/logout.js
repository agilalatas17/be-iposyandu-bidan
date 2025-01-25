const axiosInstance = require('../../../config/axiosInstance');
const { BASE_URL_USERS_SERVICE } = process.env;
const api = axiosInstance(BASE_URL_USERS_SERVICE);

module.exports = async (req, res) => {
  try {
    const id = req.user.data.id;
    const user = await api.post(`/api/auth/logout`, { bidanId: id });
    return res.json(user.data);
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
