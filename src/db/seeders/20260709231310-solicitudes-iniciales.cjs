'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('solicitudes', [
      {
        producto: 'Camisa Polo Oversize',
        talla: 'M',
        cantidad: 10,
        prioridad: 'Alta',
        estado: 'Pendiente de aprobación',
        usuario_id: 3,
        fecha_solicitud: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        producto: 'Jeans Slim Fit',
        talla: '32',
        cantidad: 8,
        prioridad: 'Media',
        estado: 'Pendiente de aprobación',
        usuario_id: 4,
        fecha_solicitud: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        producto: 'Chaqueta de Cuero',
        talla: 'L',
        cantidad: 3,
        prioridad: 'Baja',
        estado: 'Aprobada',
        usuario_id: 5,
        fecha_solicitud: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        producto: 'Vestido Floral',
        talla: 'S',
        cantidad: 6,
        prioridad: 'Alta',
        estado: 'Pendiente de aprobación',
        usuario_id: 3,
        fecha_solicitud: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        producto: 'Zapatos Deportivos',
        talla: '40',
        cantidad: 5,
        prioridad: 'Media',
        estado: 'Rechazada',
        usuario_id: 4,
        fecha_solicitud: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('solicitudes', null, {});
  }
};