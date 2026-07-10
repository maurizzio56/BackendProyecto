'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movimientos', [
      {
        producto_id: 1,
        tipo: 'Entrada',
        cantidad: 20,
        precio: 25.99,
        moneda: 'Soles',
        fecha: '2026-07-01',
        responsable: 'Admin',
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        producto_id: 2,
        tipo: 'Entrada',
        cantidad: 15,
        precio: 39.99,
        moneda: 'Soles',
        fecha: '2026-07-02',
        responsable: 'Admin',
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        producto_id: 3,
        tipo: 'Salida',
        cantidad: 2,
        precio: 89.99,
        moneda: 'Soles',
        fecha: '2026-07-03',
        responsable: 'Ana García',
        usuario_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        producto_id: 1,
        tipo: 'Salida',
        cantidad: 5,
        precio: 25.99,
        moneda: 'Soles',
        fecha: '2026-07-04',
        responsable: 'Carlos Ruiz',
        usuario_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        producto_id: 4,
        tipo: 'Entrada',
        cantidad: 10,
        precio: 45.50,
        moneda: 'Soles',
        fecha: '2026-07-05',
        responsable: 'Admin',
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movimientos', null, {});
  }
};