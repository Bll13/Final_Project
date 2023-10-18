'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({ CardBuy }) {
      this.belongsTo(CardBuy, { foreignKey: 'cardBuyId' })
    }
  }
  Photo.init(
    {
      url: {
        type: DataTypes.TEXT,
      },
      cardBuyId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'CardBuys',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Photo',
    },
  )
  return Photo
}
