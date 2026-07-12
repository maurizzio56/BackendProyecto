'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Movimiento = sequelize.define('Movimiento', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    producto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
    },
    moneda: {
      type: DataTypes.STRING(20),
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    responsable: {
      type: DataTypes.STRING(100),
    },
    usuario_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'movimientos',
    timestamps: false,
  });

  return Movimiento;
};