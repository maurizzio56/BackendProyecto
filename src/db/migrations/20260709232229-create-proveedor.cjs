'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Proveedores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      tipo: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      documento: {
        type: Sequelize.STRING(50)
      },
      contacto: {
        type: Sequelize.STRING(100)
      },
      productos: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      otros_productos: {
        type: Sequelize.STRING(255)
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
    await queryInterface.dropTable('Proveedores');
  }
};