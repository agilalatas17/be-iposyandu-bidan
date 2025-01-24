'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('bidans', {
      type: 'unique',
      fields: ['email', 'no_telp'],
      name: 'UNIQUE_BIDAN_EMAIL_AND_NO_TELP',
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
