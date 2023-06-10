'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Lists', [{
       title: 'Courses',
       id_color: 1,
       id_icon: 1,
       createdAt: new Date(),
       updatedAt: new Date(),       
     },
     {
      title: 'Whish list',
      id_color: 2,
      id_icon: 2,
      createdAt: new Date(),
      updatedAt: new Date(),       
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lists', null, {});
  }
};
