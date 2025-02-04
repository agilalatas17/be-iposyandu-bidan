module.exports = (sequelize, DataTypes) => {
  const KunjunganModel = sequelize.define(
    'KunjunganModel',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      ibu_hamil_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'ibu_hamil',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      tanggal_daftar: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      usia_kehamilan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      trimester_ke: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      keluhan: {
        type: DataTypes.TEXT,
      },
      berat_badan: {
        type: DataTypes.INTEGER,
      },
      tinggi_badan: {
        type: DataTypes.INTEGER,
      },
      indeks_masa_tubuh: {
        type: DataTypes.STRING,
      },
      tekanan_darah: {
        type: DataTypes.INTEGER,
      },
      detak_jantung_janin: {
        type: DataTypes.INTEGER,
      },
      kepala_thd_pap: {
        type: DataTypes.ENUM,
        values: ['M', 'BM'],
      },
      taksiran_bb_janin: {
        type: DataTypes.INTEGER,
      },
      jumlah_janin: {
        type: DataTypes.ENUM,
        values: ['T', 'G'],
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
    },
    {
      tableName: 'kunjungan',
      modelName: 'KunjunganModel',
    }
  );

  KunjunganModel.associate = function (models) {
    // relasi belongsTo: Kunjungan -> IbuHamil
    KunjunganModel.belongsTo(models.IbuHamilModel, {
      foreignKey: 'ibu_hamil_id',
      as: 'ibu_hamil',
    });
  };

  return KunjunganModel;
};
