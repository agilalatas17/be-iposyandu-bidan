'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ibu_hamil', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      tanggalDaftar: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'tanggal_daftar',
        allowNull: false,
      },
      nik: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hari_pertama_haid_terakhir: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      taksiran_persalinan: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tempat_lahir: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggal_lahir: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      pendidikan_terakhir: {
        type: Sequelize.ENUM,
        values: ['-', 'SD', 'SMP', 'SMA', 'D3', 'S1', 'S2', 'S3'],
      },
      pekerjaan: {
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telepon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      golongan_darah: {
        type: Sequelize.ENUM,
        values: ['A', 'B', 'AB', 'O'],
      },
      pembiayaan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      no_jkn: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      faskes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      faskes_rujukan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ibu_hamil');
  },
};
