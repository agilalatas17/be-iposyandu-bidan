const axiosInstance = require('../../config/axiosInstance');
const { BASE_URL_USERS_SERVICE } = process.env;
const api = axiosInstance(BASE_URL_USERS_SERVICE);

module.exports = async (req, res) => {
  try {
    const { id } = req.user.data;
    const user = await api.get(`/api/user/${id}`);

    return res.json(user.data);
  } catch (err) {
    const { status, data } = err.response;
    return res.status(status).json(data);
  }
};
