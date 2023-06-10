'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Todos', [{
       id_list: '1',
       content: 'Pensez à acheter du pain',       
       createdAt: new Date(),
       updatedAt: new Date(),       
     },
     {
      id_list: '1',
      content: 'Pensez à acheter des légumes',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
