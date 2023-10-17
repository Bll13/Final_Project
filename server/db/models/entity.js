const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Entity extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' })
    }
  }
  Entity.init(
    {
      inn: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      ogrn: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      adres: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      adresCod: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Entity',
    },
  )
  return Entity
}
