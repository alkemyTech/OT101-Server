'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'testimonials',
      [
        {
          name: 'Mariza Tallal',
          content: 'Tengo la suerte de ayudar a Fundacion Somos Más a conseguir donaciones para los niños que las necesitan. Trabajando para una despensa de alimentos local, hemos identificado familias con niños en el área que necesitan ayuda de muchas maneras.',
          image: '/images/story-author-01.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Raquel Fikkers',
          content: 'Elegí donar a la Fundación Somos Más por varias razones. La fundación está dirigida por voluntarios y TODO el dinero se destina a ayudar a las personas que viven localmente.',
          image: '/images/story-author-03.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Francisco Del Cerro',
          content: 'La integridad, la compasión y la responsabilidad son las características distintivas de esta organización y es una verdadera organización benéfica! Nunca podría decir lo suficiente sobre todo lo bueno que están haciendo para ayudar.',
          image: '/images/story-author-02.png',
          createdAt: new Date(),
          updatedAt: new Date()
        }
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
