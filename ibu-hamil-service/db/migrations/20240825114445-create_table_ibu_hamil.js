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
        type: Sequelize.DATEONLY,
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
      hpht: {
        type: Sequelize.DATEONLY,
        field: 'hari_pertama_haid_terakhir',
        allowNull: false,
      },
      taksiranPersalinan: {
        type: Sequelize.DATEONLY,
        field: 'taksiran_persalinan',
        allowNull: false,
      },
      tempatLahir: {
        type: Sequelize.STRING,
        field: 'tempat_lahir',
        allowNull: false,
      },
      tanggalLahir: {
        type: Sequelize.DATEONLY,
        field: 'tanggal_lahir',
        allowNull: false,
      },
      pendidikanTerakhir: {
        type: Sequelize.ENUM,
        field: 'pendidikan_terakhir',
        values: ['-', 'SD', 'SMP', 'SMA', 'D3', 'S1', 'S2', 'S3'],
        defaultValue: '-',
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
      golDarah: {
        type: Sequelize.ENUM,
        field: 'golongan_darah',
        values: ['A', 'B', 'AB', 'O'],
        defaultValue: 'A',
      },
      pembiayaan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      noJkn: {
        type: Sequelize.STRING,
        field: 'no_jkn',
        allowNull: false,
      },
      faskes: {
        type: Sequelize.STRING,
      },
      faskesRujukan: {
        type: Sequelize.STRING,
        field: 'faskes_rujukan',
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
    await queryInterface.dropTable('ibu_hamil');
  },
};
