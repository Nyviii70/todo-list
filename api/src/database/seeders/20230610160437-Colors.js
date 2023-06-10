'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Colors', [{
       name: 'primary',
       createdAt: new Date(),
       updatedAt: new Date(),       
     },
     {
      name: 'secondary',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'tertiary',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'success',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'danger',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'warning',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'dark',
      createdAt: new Date(),
      updatedAt: new Date(),       
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  }
};
