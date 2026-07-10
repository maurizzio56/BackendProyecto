'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movimientos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      producto_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tipo: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      precio: {
        type: Sequelize.DECIMAL(10, 2)
      },
      moneda: {
        type: Sequelize.STRING(20)
      },
      fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      responsable: {
        type: Sequelize.STRING(100)
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
    await queryInterface.dropTable('Movimientos');
  }
};