'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kunjungan', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      ibu_hamil_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'ibu_hamil',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      tanggal_daftar: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      usia_kehamilan: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      trimester_ke: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      keluhan: {
        type: Sequelize.TEXT,
      },
      berat_badan: {
        type: Sequelize.INTEGER,
      },
      tinggi_badan: {
        type: Sequelize.INTEGER,
      },
      indeks_masa_tubuh: {
        type: Sequelize.STRING,
      },
      tekanan_darah: {
        type: Sequelize.INTEGER,
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kunjungan');
  },
};
