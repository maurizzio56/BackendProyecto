'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('proveedores', [
      {
        nombre: 'Distribuidora Textil S.A.',
        tipo: 'Empresa',
        documento: '20605478963',
        contacto: '+51 987 654 321',
        productos: ['Polos', 'Casacas'],
        otros_productos: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Moda Express',
        tipo: 'Empresa',
        documento: '20547896321',
        contacto: '+51 955 111 222',
        productos: ['Pantalones', 'Zapatillas'],
        otros_productos: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Ropa Fina S.R.L.',
        tipo: 'Empresa',
        documento: '20478963215',
        contacto: 'ventas@ropafina.com',
        productos: ['Vestidos', 'Faldas'],
        otros_productos: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Juan Pérez',
        tipo: 'Persona',
        documento: '74859632',
        contacto: 'juanperez@gmail.com',
        productos: ['Gorras', 'Accesorios'],
        otros_productos: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Calzado Elite',
        tipo: 'Empresa',
        documento: '20789456321',
        contacto: '+51 988 777 666',
        productos: ['Zapatos', 'Zapatillas'],
        otros_productos: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('proveedores', null, {});
  }
};