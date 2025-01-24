module.exports = (sequelize, DataTypes) => {
  const IbuHamilModel = sequelize.define(
    'IbuHamilModel',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      tanggalDaftar: {
        type: DataTypes.DATEONLY,
        field: 'tanggal_daftar',
        allowNull: false,
      },
      nik: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hpht: {
        type: DataTypes.DATEONLY,
        field: 'hari_pertama_haid_terakhir',
        allowNull: false,
      },
      taksiranPersalinanDate: {
        type: DataTypes.DATEONLY,
        field: 'taksiran_persalinan',
        allowNull: false,
      },
      tempatLahir: {
        type: DataTypes.STRING,
        field: 'tempat_lahir',
        allowNull: false,
      },
      tanggalLahir: {
        type: DataTypes.DATEONLY,
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
        type: DataTypes.STRING,
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telepon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      golDarah: {
        type: DataTypes.ENUM,
        field: 'golongan_darah',
        values: ['A', 'B', 'AB', 'O'],
        defaultValue: 'A',
      },
      pembiayaan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      noJkn: {
        type: DataTypes.STRING,
        field: 'no_jkn',
        allowNull: false,
      },
      faskes: {
        type: DataTypes.STRING,
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
      // deletedAt: {
      //   type: DataTypes.DATE,
      //   field: 'deleted_at',
      // },
    },
    {
      tableName: 'ibu_hamil',
      modelName: 'IbuHamilModel',
      // paranoid: true,
    }
  );

  return IbuHamilModel;
};
