const IbuHamilModel = require('./IbuHamilModel');

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
      tanggalKunjungan: {
        type: DataTypes.DATEONLY,
        field: 'tanggal_kunjungan',
        allowNull: false,
      },
      usiaKehamilan: {
        type: DataTypes.INTEGER,
        field: 'tanggal_kunjungan',
        allowNull: false,
      },
      trimesterKe: {
        type: DataTypes.INTEGER,
        field: 'trimester_ke',
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
      tableName: 'kunjungan_ibu_hamil',
      modelName: 'KunjunganModel',
      paranoid: true,
    }
  );

  KunjunganModel.associate = (models) => {
    KunjunganModel.belongsTo(models.IbuHamilModel, {
      foreignKey: 'ibuHamilId',
    });
  };

  return KunjunganModel;
};
