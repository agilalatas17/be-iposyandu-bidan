const axiosInstance = require('../config/axiosInstance');
const { BASE_URL_IBU_HAMIL_SERVICE } = process.env;
const api = axiosInstance(BASE_URL_IBU_HAMIL_SERVICE);

const jumlahIbuHamil = async (req, res) => {
  try {
    const jumlahIbuHamilData = await api.get('/api/ibu-hamil/jumlah-data');

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

const getAllIbuHamil = async (req, res) => {
  try {
    const ibuHamilData = await api.get('/api/ibu-hamil');

    return res.json(ibuHamilData.data);
  } catch (err) {
    const { status, data } = err.response;

    return res.status(status).json(data);
  }
};

const getIbuHamilById = async (req, res) => {
  try {
    const id = req.params.id;
    const ibuHamilData = await api.get(`/api/ibu-hamil/${id}`);

    return res.json(ibuHamilData.data);
  } catch (err) {
    const { status, data } = err.response;

    return res.status(status).json(data);
  }
};

const createIbuHamil = async (req, res) => {
  try {
    const ibuHamilData = await api.post('/api/ibu-hamil', req.body);

    return res.json(ibuHamilData.data);
  } catch (err) {
    const { status, data } = err.response;

    return res.status(status).json(data);
  }
};

const updateIbuHamil = async (req, res) => {
  try {
    const id = req.params.id;
    const ibuHamil = await api.put(`/api/ibu-hamil/${id}`, req.body);

    return res.json(ibuHamil.data);
  } catch (err) {
    const { status, data } = err.response;

    return res.status(status).json(data);
  }
};

const deleteIbuHamil = async (req, res) => {
  try {
    const id = req.params.id;
    const ibuHamil = await api.delete(`/api/ibu-hamil/${id}`);

    return res.json(ibuHamil.data);
  } catch (err) {
    const { status, data } = err.response;

    return res.status(status).json(data);
  }
};

module.exports = {
  jumlahIbuHamil,
  getAllIbuHamil,
  getIbuHamilById,
  createIbuHamil,
  updateIbuHamil,
  deleteIbuHamil,
};
