const db = require('../db/models/index.cjs');
const Proveedor = db.Proveedor;

const getProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.create(req.body);
    res.status(201).json(proveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProveedor = async (req, res) => {
  try {
    await Proveedor.destroy({ where: { id: req.params.id } });
    res.json({ mensaje: 'Proveedor eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getProveedores, createProveedor, deleteProveedor };