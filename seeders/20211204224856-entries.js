'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'entries',
      [
        {
          name: 'Apoyo Escolar para el nivel Primario',
          image: 'https://picsum.photos/900/600',
          type: `news`,
        },
        {
          name: 'Apoyo Escolar para el nivel Secundaria',
          image: 'https://picsum.photos/900/600',
          type: `news`,
        },
        {
          name: 'Tutorías',
          image: 'https://picsum.photos/900/600',
          type: `news`,
        },
        {
          name: 'Taller Arte y Cuentos',
          image: 'https://picsum.photos/900/600',
          type: 'news',
        },
        {
          name: 'Paseos recreativos y educativos',
          image: 'https://picsum.photos/900/600',
          type:
            'news',
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
