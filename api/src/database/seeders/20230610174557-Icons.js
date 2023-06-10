'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Icons', [{
       name: 'sunny-outline',
       createdAt: new Date(),
       updatedAt: new Date(),       
     },
     {
      name: 'calendar-outline',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'cart-outline',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'list-outline',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'car-outline',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'basketball-outline',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'airplane-outline',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'cafe-outline',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'fast-food-outline',
      createdAt: new Date(),
      updatedAt: new Date(),       
    },
    {
      name: 'man-outline',
      createdAt: new Date(),
      updatedAt: new Date(),       
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Icons', null, {});
  }
};
