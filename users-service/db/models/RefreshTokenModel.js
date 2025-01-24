module.exports = (sequelize, DataTypes) => {
  const RefreshTokenModel = sequelize.define(
    'RefreshTokenModel',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      token: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      bidanId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        field: 'bidan_id',
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
      tableName: 'refresh_token',
      modelName: 'RefreshTokenModel',
      // paranoid: true,
    }
  );

  return RefreshTokenModel;
};
