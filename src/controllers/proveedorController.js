const { Proveedor } = require('../db/models/index.cjs');
const { Op } = require('sequelize');

exports.getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProveedorById = async (req, res) => {
  try {
    const { id } = req.params;
    const proveedor = await Proveedor.findByPk(id);
    
    if (!proveedor) {
      return res.status(404).json({ error: 'Proveedor no encontrado' });
    }
    
    res.status(200).json(proveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProveedor = async (req, res) => {
  try {
    const { nombre, tipo, documento, contacto, productos, otros_productos } = req.body;
    
    if (!nombre || !tipo) {
      return res.status(400).json({ error: 'Nombre y tipo son obligatorios' });
    }
    
    if (!['individual', 'empresa'].includes(tipo)) {
      return res.status(400).json({ error: 'Tipo debe ser: individual o empresa' });
    }
    
    const nuevoProveedor = await Proveedor.create({
      nombre,
      tipo,
      documento,
      contacto,
      productos,
      otros_productos
    });
    
    res.status(201).json(nuevoProveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, tipo, documento, contacto, productos, otros_productos } = req.body;
    
    const proveedor = await Proveedor.findByPk(id);
    if (!proveedor) {
      return res.status(404).json({ error: 'Proveedor no encontrado' });
    }
    
    if (tipo && !['individual', 'empresa'].includes(tipo)) {
      return res.status(400).json({ error: 'Tipo debe ser: individual o empresa' });
    }
    
    await proveedor.update({
      nombre: nombre || proveedor.nombre,
      tipo: tipo || proveedor.tipo,
      documento: documento || proveedor.documento,
      contacto: contacto || proveedor.contacto,
      productos: productos || proveedor.productos,
      otros_productos: otros_productos || proveedor.otros_productos
    });
    
    res.status(200).json(proveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    
    const proveedor = await Proveedor.findByPk(id);
    if (!proveedor) {
      return res.status(404).json({ error: 'Proveedor no encontrado' });
    }
    
    await proveedor.destroy();
    res.status(200).json({ message: 'Proveedor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProveedoresByTipo = async (req, res) => {
  try {
    const { tipo } = req.params;
    
    if (!['individual', 'empresa'].includes(tipo)) {
      return res.status(400).json({ error: 'Tipo debe ser: individual o empresa' });
    }
    
    const proveedores = await Proveedor.findAll({
      where: { tipo }
    });
    
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchProveedores = async (req, res) => {
  try {
    const { nombre } = req.query;
    
    if (!nombre) {
      return res.status(400).json({ error: 'Parámetro nombre es requerido' });
    }
    
    const proveedores = await Proveedor.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${nombre}%`
        }
      }
    });
    
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};