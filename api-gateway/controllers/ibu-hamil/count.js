const axiosInstance = require('../../config/axiosInstance');
const { BASE_URL_IBU_HAMIL_SERVICE } = process.env;
const api = axiosInstance(BASE_URL_IBU_HAMIL_SERVICE);
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  try {
    const bidanId = req.user.data.id;

    const jumlahIbuHamilData = await api.get('/api/ibu-hamil/jumlah-data', {
      params: {
        bidan_id: bidanId,
      },
    });

    return res.status(200).json(jumlahIbuHamilData.data);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res
        .status(500)
        .json({ status: 'error', message: 'service unavailable' });
    }
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
