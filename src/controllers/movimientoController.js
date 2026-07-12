const { Movimiento, Producto, Usuario } = require('../db/models/index.cjs');

exports.getAllMovimientos = async (req, res) => {
  try {
    const movimientos = await Movimiento.findAll({
      include: [
        { model: Producto, attributes: ['id', 'nombre'] },
        { model: Usuario, attributes: ['id', 'nombre'] }
      ]
    });
    res.status(200).json(movimientos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMovimientoById = async (req, res) => {
  try {
    const { id } = req.params;
    const movimiento = await Movimiento.findByPk(id, {
      include: [
        { model: Producto, attributes: ['id', 'nombre'] },
        { model: Usuario, attributes: ['id', 'nombre'] }
      ]
    });
    
    if (!movimiento) {
      return res.status(404).json({ error: 'Movimiento no encontrado' });
    }
    
    res.status(200).json(movimiento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMovimiento = async (req, res) => {
  try {
    const { producto_id, tipo, cantidad, precio, moneda, fecha, responsable, usuario_id } = req.body;
    
    if (!producto_id || !tipo || !cantidad || !fecha) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    
    if (!['entrada', 'salida', 'ajuste'].includes(tipo)) {
      return res.status(400).json({ error: 'Tipo debe ser: entrada, salida o ajuste' });
    }
    
    const producto = await Producto.findByPk(producto_id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    
    const nuevoMovimiento = await Movimiento.create({
      producto_id,
      tipo,
      cantidad,
      precio,
      moneda,
      fecha,
      responsable,
      usuario_id
    });
    
    res.status(201).json(nuevoMovimiento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMovimiento = async (req, res) => {
  try {
    const { id } = req.params;
    const { producto_id, tipo, cantidad, precio, moneda, fecha, responsable, usuario_id } = req.body;
    
    const movimiento = await Movimiento.findByPk(id);
    if (!movimiento) {
      return res.status(404).json({ error: 'Movimiento no encontrado' });
    }
    
    if (tipo && !['entrada', 'salida', 'ajuste'].includes(tipo)) {
      return res.status(400).json({ error: 'Tipo debe ser: entrada, salida o ajuste' });
    }
    
    if (producto_id) {
      const producto = await Producto.findByPk(producto_id);
      if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
    }
    
    await movimiento.update({
      producto_id: producto_id || movimiento.producto_id,
      tipo: tipo || movimiento.tipo,
      cantidad: cantidad || movimiento.cantidad,
      precio: precio || movimiento.precio,
      moneda: moneda || movimiento.moneda,
      fecha: fecha || movimiento.fecha,
      responsable: responsable || movimiento.responsable,
      usuario_id: usuario_id || movimiento.usuario_id
    });
    
    res.status(200).json(movimiento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMovimiento = async (req, res) => {
  try {
    const { id } = req.params;
    
    const movimiento = await Movimiento.findByPk(id);
    if (!movimiento) {
      return res.status(404).json({ error: 'Movimiento no encontrado' });
    }
    
    await movimiento.destroy();
    res.status(200).json({ message: 'Movimiento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMovimientosByTipo = async (req, res) => {
  try {
    const { tipo } = req.params;
    
    if (!['entrada', 'salida', 'ajuste'].includes(tipo)) {
      return res.status(400).json({ error: 'Tipo debe ser: entrada, salida o ajuste' });
    }
    
    const movimientos = await Movimiento.findAll({
      where: { tipo },
      include: [
        { model: Producto, attributes: ['id', 'nombre'] },
        { model: Usuario, attributes: ['id', 'nombre'] }
      ]
    });
    
    res.status(200).json(movimientos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};