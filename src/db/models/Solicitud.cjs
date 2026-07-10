'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Solicitud = sequelize.define('Solicitud', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    producto: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    talla: {
      type: DataTypes.STRING(10),
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    prioridad: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(30),
      defaultValue: 'Pendiente de aprobación',
    },
    fecha_solicitud: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'solicitudes',
  });

  return Solicitud;
};