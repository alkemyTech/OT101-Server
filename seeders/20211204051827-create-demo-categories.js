'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [{
      name: 'Noticias',
      description: 'Noticias',
    },{
      name: 'Eventos',
      description: 'Eventos',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
