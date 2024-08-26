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
      hpht: {
        type: Sequelize.DATE,
        field: 'hari_pertama_haid_terakhir',
        allowNull: false,
      },
      taksiranPersalinan: {
        type: Sequelize.DATE,
        field: 'taksiran_persalinan',
        allowNull: false,
      },
      tempatLahir: {
        type: DataTypes.STRING,
        field: 'tempat_lahir',
        allowNull: false,
      },
      tanggalLahir: {
        type: DataTypes.DATE,
        field: 'tanggal_lahir',
        allowNull: false,
      },
      pendidikanTerakhir: {
        type: DataTypes.ENUM,
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
        type: DataTypes.ENUM,
        field: 'golongan_darah',
        values: ['A', 'B', 'AB', 'O'],
        defaultValue: 'A',
      },
      pembiayaan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      noJkn: {
        type: DataTypes.STRING,
        field: 'no_jkn',
        allowNull: false,
      },
      faskes: {
        type: Sequelize.STRING,
      },
      faskesRujukan: {
        type: DataTypes.STRING,
        field: 'faskes_rujukan',
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ibu_hamil');
  },
};
