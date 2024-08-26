'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'IbuHamil',
      [
        {
          tanggalDaftar: '2024-06-28',
          nik: '3209231909010002',
          nama: 'Siti',
          hpht: '2024-08-01',
          tempatLahir: 'Bandung',
          tanggalLahir: '2001-09-19',
          pendidikanTerakhir: 'SMA',
          pekerjaan: 'Ibu Rumah Tangga',
          alamat: 'Jl. Merdeka No. 123',
          telepon: '081234567890',
          golonganDarah: 'O',
          pembiayaan: 'BPJS',
          noJkn: '1234567890123',
          faskes: 'Faskesdsadsadsa',
          faskesRujukan: 'Faskes B',
        },
        {
          tanggalDaftar: '2024-10-17',
          nik: '3209231707980003',
          nama: 'Munaroh',
          hpht: '2024-10-01',
          tempatLahir: 'Bandung',
          tanggalLahir: '1998-07-17',
          pendidikanTerakhir: 'D3',
          pekerjaan: 'Ibu Rumah Tangga',
          alamat: 'Jl. Cinta Damai No. 40',
          telepon: '081234567890',
          golonganDarah: 'a',
          pembiayaan: 'BPJS',
          noJkn: '1234567894455',
          faskes: 'Faskesdsadsadsa',
          faskesRujukan: 'Faskes B',
        },
        {
          tanggalDaftar: '2024-02-02',
          nik: '3209231909010004',
          nama: 'Hinata',
          hpht: '2024-10-01',
          tempatLahir: 'Bandung',
          tanggalLahir: '1998-07-17',
          pendidikanTerakhir: 'S1',
          pekerjaan: 'Guru',
          alamat: 'Jl. Cinta Damai No. 40',
          telepon: '085172294832',
          golonganDarah: 'a',
          pembiayaan: 'BPJS',
          noJkn: '123423894453',
          faskes: 'Faskesdsadsadsa',
          faskesRujukan: 'Faskes B',
        },
      ],
      {
        tableName: 'ibu_hamil',
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
