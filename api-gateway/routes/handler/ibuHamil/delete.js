const apiAdapter = require('../../../config/apiAdapter');
const { BASE_URL_IBU_HAMIL_SERVICE } = process.env;
const api = apiAdapter(BASE_URL_IBU_HAMIL_SERVICE);

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const ibuHamil = await api.delete(`/api/ibu-hamil/${id}`);

    return res.json(ibuHamil.data);
  } catch (err) {
    const { status, data } = err.response;

    return res.status(status).json(data);
  }
};
