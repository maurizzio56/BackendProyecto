'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Proveedor = sequelize.define('Proveedor', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    documento: {
      type: DataTypes.STRING(50),
    },
    contacto: {
      type: DataTypes.STRING(100),
    },
    productos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    otros_productos: {
      type: DataTypes.STRING(255),
    },
  }, {
    tableName: 'proveedores',
  });

  return Proveedor;
};