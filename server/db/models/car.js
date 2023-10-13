const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' })
    }
  }
  Car.init(
    {
      marckCar: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tonnageCar: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      bodyType: {
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
    },
    {
      sequelize,
      modelName: 'Car',
    },
  )
  return Car
}
