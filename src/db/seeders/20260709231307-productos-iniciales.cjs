'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('productos', [
      {
        nombre: 'Camisa Polo Oversize',
        marca: 'Nike',
        tipo: 'Polo',
        tallas: JSON.stringify({ S: 10, M: 15, L: 8, XL: 5 }),
        proveedor_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Jeans Slim Fit',
        marca: 'Levi\'s',
        tipo: 'Pantalon',
        tallas: JSON.stringify({ 28: 5, 30: 8, 32: 12, 34: 6, 36: 3 }),
        proveedor_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Chaqueta de Cuero',
        marca: 'Zara',
        tipo: 'Casaca',
        tallas: JSON.stringify({ S: 3, M: 5, L: 4, XL: 2 }),
        proveedor_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Vestido Floral',
        marca: 'H&M',
        tipo: 'Vestido',
        tallas: JSON.stringify({ S: 6, M: 8, L: 4 }),
        proveedor_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Zapatos Deportivos',
        marca: 'Adidas',
        tipo: 'Zapatos',
        tallas: JSON.stringify({ 38: 4, 39: 6, 40: 8, 41: 5, 42: 3 }),
        proveedor_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('productos', null, {});
  }
};