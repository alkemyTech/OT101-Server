'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Austin',
      lastName: 'Powers',
      email: 'austin@powers.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 1,
      image: 'https://upload.wikimedia.org/wikipedia/en/4/42/Mike-Myers-Austin-Powers-1-.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'John',
      lastName: 'Lennon',
      email: 'john@lennon.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Streetart_Bild_von_John_Lennon_%28Prag%29.jpg/800px-Streetart_Bild_von_John_Lennon_%28Prag%29.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Bill',
      lastName: 'Gates',
      email: 'bill@gates.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/800px-Bill_Gates_2017_%28cropped%29.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Linus',
      lastName: 'Torvalds',
      email: 'linus@torvalds.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/800px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Charly',
      lastName: 'García',
      email: 'charly@garcia.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Charly_Garc%C3%ADa_por_Alejandro_Kuropatwa.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'León',
      lastName: 'Gieco',
      email: 'leon@gieco.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Le%C3%B3n_Gieco_-_Argentina_-_En_Casa_Rosada_-_23SEP05_-presidenciagovar.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Billie',
      lastName: 'Eilish',
      email: 'billie@eilish.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg/800px-Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Luke',
      lastName: 'Skywalker',
      email: 'luke@skywalker.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Luke_Skywalker_-_Welcome_Banner_%28Cropped%29.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Celeste',
      lastName: 'Carballo',
      email: 'celeste@carballo.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Celeste_Carballo.jpg/1280px-Celeste_Carballo.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Margaret',
      lastName: 'Hamilton',
      email: 'margaret@hamilton.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Margaret_Hamilton_in_action.jpg/1280px-Margaret_Hamilton_in_action.jpgcom/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },

    {
      firstName: 'Hugo',
      lastName: 'Foncea',
      email: 'hugo@foncea.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Mateo',
      lastName: 'Ledesma',
      email: 'mateo@ledesma.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Nicolás',
      lastName: 'Cagiao',
      email: 'nicolas@cagiao.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Germán',
      lastName: 'Sanz',
      email: 'german@sanz.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Alejandro',
      lastName: 'Pascuale',
      email: 'alejandro@pascuale.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Pablo',
      lastName: 'Menichini',
      email: 'pablo@menichini.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Francisco',
      lastName: 'Messina',
      email: 'francisco@messina.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Federico',
      lastName: 'González',
      email: 'federico@gonzalez.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Gabriela',
      lastName: 'Damico',
      email: 'gabriela@damico.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@test.com',
      // Important: Password not encrypted yet! 
      password: '12345',
      roleId: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
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