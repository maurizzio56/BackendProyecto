const express = require('express');
const router = express.Router();
const db = require('../db/models/index.cjs');
const { Op } = require('sequelize');

router.get('/resumen', async (req, res) => {
  try {
    const productos = await db.Producto.findAll();

    let totalProductos = productos.length;
    let stockBajo = 0;
    let conteoPolos = 0, conteoPantalones = 0, conteoCasacas = 0, conteoShorts = 0;
    const alertasStock = [];

    productos.forEach((prod, index) => {
      let stockTotal = 0;
      const tallas = prod.tallas || {};
      Object.values(tallas).forEach(c => stockTotal += Number(c));

      if (prod.tipo === 'Polo' || prod.tipo === 'Polera') conteoPolos += stockTotal;
      if (prod.tipo === 'Pantalon') conteoPantalones += stockTotal;
      if (prod.tipo === 'Casaca') conteoCasacas += stockTotal;
      if (prod.tipo === 'Shorts') conteoShorts += stockTotal;

      if (stockTotal < 5) {
        stockBajo++;
        alertasStock.push({
          id: index + 1,
          producto: `${prod.nombre} (${prod.marca || 'Sin marca'})`,
          stock: stockTotal,
          estado: stockTotal === 0 ? 'Crítico' : 'Atención'
        });
      }
    });

    res.json({
      totalProductos,
      stockBajo,
      productosAgregadosHoy: 1,
      categorias: [
        { nombre: 'Polos / Poleras', cantidad: conteoPolos, color: '#3498db' },
        { nombre: 'Pantalones', cantidad: conteoPantalones, color: '#2ecc71' },
        { nombre: 'Casacas', cantidad: conteoCasacas, color: '#9b59b6' },
        { nombre: 'Shorts', cantidad: conteoShorts, color: '#f1c40f' }
      ],
      alertasStock: alertasStock.slice(0, 5)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;