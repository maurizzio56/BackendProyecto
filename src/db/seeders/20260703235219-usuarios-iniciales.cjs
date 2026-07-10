'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios', [
      {
        nombre: 'Admin',
        email: 'admin@example.com',
        password: 'admin123',
        rol: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Empleado Test',
        email: 'empleado@test.com',
        password: 'empleado123',
        rol: 'Empleado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Ana García',
        email: 'ana@example.com',
        password: 'ana123',
        rol: 'Empleado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Carlos Ruiz',
        email: 'carlos@example.com',
        password: 'carlos123',
        rol: 'Empleado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'María López',
        email: 'maria@example.com',
        password: 'maria123',
        rol: 'Empleado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};