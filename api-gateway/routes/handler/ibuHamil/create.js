const apiAdapter = require('../../../config/apiAdapter');
const { BASE_URL_IBU_HAMIL_SERVICE } = process.env;

const api = apiAdapter(BASE_URL_IBU_HAMIL_SERVICE);

module.exports = async (req, res) => {
  try {
    const ibuHamil = await api.post('/api/ibu-hamil', req.body);

    return res.json(ibuHamil.data);
  } catch (err) {
    const { status, data } = err.response;

    return res.status(status).json(data);
  }
};
