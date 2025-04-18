const axiosInstance = require('../../config/axiosInstance');
const { BASE_URL_IBU_HAMIL_SERVICE } = process.env;
const api = axiosInstance(BASE_URL_IBU_HAMIL_SERVICE);

module.exports = async (req, res) => {
  try {
    const bidanId = req.user.data.id;

    const response = await api.post(`/api/ibu-hamil`, {
      ...req.body,
      bidan_id: bidanId,
    });

    return res.status(201).json(response.data);
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
