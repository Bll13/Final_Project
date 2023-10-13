const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class CardBuy extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' })
    }
  }
  CardBuy.init(
    {
      photo: {
        type: DataTypes.STRING,
        defaultValue: './img/noPhoto.jpg',
      },
      adres: {
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
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      ves: {
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      obm: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'CardBuy',
    },
  )
  return cardBuy
}
