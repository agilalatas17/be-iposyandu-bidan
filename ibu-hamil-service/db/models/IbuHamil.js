module.exports = (sequelize, DataTypes) => {
  const IbuHamil = sequelize.define(
    'IbuHamil',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      tanggalDaftar: {
        type: DataTypes.NOW,
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
      hari_pertama_haid_terakhir: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      taksiran_persalinan: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tempat_lahir: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tanggal_lahir: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      pendidikan_terakhir: {
        type: DataTypes.ENUM,
        values: ['-', 'SD', 'SMP', 'SMA', 'D3', 'S1', 'S2', 'S3'],
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
      golongan_darah: {
        type: DataTypes.ENUM,
        values: ['A', 'B', 'AB', 'O'],
      },
      pembiayaan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      no_jkn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      faskes: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      faskes_rujukan: {
        type: DataTypes.STRING,
        allowNull: false,
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
    },
    {
      tableName: 'ibu_hamil',
      paranoid: true,
    }
  );

  return IbuHamil;
};
