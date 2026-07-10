'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING(100),
    },
    tipo: {
      type: DataTypes.STRING(50),
    },
    tallas: {
      type: DataTypes.JSONB,
    },
    proveedor_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'productos',
  });

  return Producto;
};