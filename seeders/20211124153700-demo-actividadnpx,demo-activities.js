'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'activities',
      [
        {
          name: 'Actividad 1',
          image: 'https://picsum.photos/900/600',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus, magna at egestas pellentesque, felis nunc blandit quam, quis pretium urna nunc vehicula eros.',
        },
        {
          name: 'Actividad 2',
          image: 'https://picsum.photos/900/600',
          content:
            'Curabitur non dolor lorem. Sed tincidunt, purus ut pharetra tincidunt, ante massa aliquam libero, nec fringilla nisi lacus a tellus. Fusce porta mattis est quis posuere.',
        },
        {
          name: 'Actividad 3',
          image: 'https://picsum.photos/900/600',
          content:
            'Donec purus turpis, sodales ut condimentum quis, blandit eget nunc. Curabitur posuere maximus dapibus. Nam lectus odio, fringilla a ante luctus, dapibus lacinia sem.',
          deletedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', null, {});
  },
};
