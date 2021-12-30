'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'entries',
      [
        {
          name: 'Apoyo Escolar para el nivel Primario',
          image: '/Fotos/Foto 5.jpg',
          type: `news`,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Apoyo Escolar para el nivel Secundaria',
          image: '/Fotos/Foto 4.jpg',
          type: `news`,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tutorías',
          image: '/Fotos/Foto 6.jpg',
          type: `news`,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Taller Arte y Cuentos',
          image: '/Fotos/Foto 10.jpg',
          type: 'news',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Paseos recreativos y educativos',
          image: '/Fotos/Foto 11.jpg',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },
  

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
