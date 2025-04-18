'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('ibu_hamil', 'bidan_id', {
      type: Sequelize.UUID,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('ibu_hamil', 'bidan_id');
  },
};
