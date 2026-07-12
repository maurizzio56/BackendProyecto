const db = require('../db/models/index.cjs');
const Movimiento = db.Movimiento;
const Producto = db.Producto;

const getMovimientos = async (req, res) => {
  try {
    const movimientos = await Movimiento.findAll({
      include: [{ model: Producto, as: 'producto' }],
      order: [['fecha', 'DESC']]
    });
    res.json(movimientos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMovimiento = async (req, res) => {
  try {
    const movimiento = await Movimiento.create(req.body);

    // Actualizar stock del producto
    const producto = await Producto.findByPk(req.body.producto_id);
    if (producto) {
      const stockActual = producto.cantidad || 0;
      const nuevaCantidad = req.body.tipo === 'Entrada'
        ? stockActual + parseInt(req.body.cantidad)
        : stockActual - parseInt(req.body.cantidad);
      await producto.update({ cantidad: nuevaCantidad });
    }

    res.status(201).json(movimiento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getMovimientos, createMovimiento };