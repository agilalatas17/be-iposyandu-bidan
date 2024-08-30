'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kunjungan_ibu_hamil', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      ibuHamilId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        field: 'ibu_hamil_id',
        allowNull: false,
        references: {
          model: 'ibu_hamil',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      tanggalKunjungan: {
        type: Sequelize.DATEONLY,
        field: 'tanggal_kunjungan',
        allowNull: false,
      },
      usiaKehamilan: {
        type: Sequelize.INTEGER,
        field: 'usia_kehamilan',
        allowNull: false,
      },
      trimesterKe: {
        type: Sequelize.INTEGER,
        field: 'trimester_ke',
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        field: 'deleted_at',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kunjungan_ibu_hamil');
  },
};
