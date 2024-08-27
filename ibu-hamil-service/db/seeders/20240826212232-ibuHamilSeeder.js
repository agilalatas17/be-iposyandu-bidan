'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ibu_hamil',
      [
        {
          id: uuid,
          tanggal_daftar: '2024-06-28',
          nik: '3209231909010002',
          nama: 'Siti',
          hari_pertama_haid_terakhir: '2024-08-01',
          tempat_lahir: 'Bandung',
          tanggal_lahir: '2001-09-19',
          pendidikan_terakhir: 'SMA',
          pekerjaan: 'Ibu Rumah Tangga',
          alamat: 'Jl. Merdeka No. 123',
          telepon: '081234567890',
          golongan_darah: 'O',
          pembiayaan: 'BPJS',
          no_jkn: '1234567890123',
          faskes: 'Faskesdsadsadsa',
          faskes_rujukan: 'Faskes B',
        },
        {
          id: uuid,
          tanggal_daftar: '2024-10-17',
          nik: '3209231707980003',
          nama: 'Munaroh',
          hari_pertama_haid_terakhir: '2024-10-01',
          tempat_lahir: 'Bandung',
          tanggal_lahir: '1998-07-17',
          pendidikan_terakhir: 'D3',
          pekerjaan: 'Ibu Rumah Tangga',
          alamat: 'Jl. Cinta Damai No. 40',
          telepon: '081234567890',
          golongan_darah: 'A',
          pembiayaan: 'BPJS',
          no_jkn: '1234567894455',
          faskes: 'Faskesdsadsadsa',
          faskes_rujukan: 'Faskes B',
        },
        {
          id: uuid,
          tanggal_daftar: '2024-02-02',
          nik: '3209231909010004',
          nama: 'Hinata',
          hari_pertama_haid_terakhir: '2024-10-01',
          tempat_lahir: 'Bandung',
          tanggal_lahir: '1998-07-17',
          pendidikan_terakhir: 'S1',
          pekerjaan: 'Guru',
          alamat: 'Jl. Cinta Damai No. 40',
          telepon: '085172294832',
          golongan_darah: 'B',
          pembiayaan: 'BPJS',
          no_jkn: '123423894453',
          faskes: 'Faskesdsadsadsa',
          faskes_rujukan: 'Faskes B',
        },
      ],
      {
        tableName: 'ibu_hamil',
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ibu_hamil', null, {});
  },
};
