'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Solicitudes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      producto: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      talla: {
        type: Sequelize.STRING(10)
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      prioridad: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(30),
        defaultValue: 'Pendiente de aprobación'
      },
      fecha_solicitud: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      usuario_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Solicitudes');
  }
};