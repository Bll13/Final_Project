const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Role, CardBuy, Entity, Car }) {
      this.belongsTo(Role, { foreignKey: 'idRole' })
      this.hasMany(CardBuy, { foreignKey: 'userId' })
      this.hasMany(Entity, { foreignKey: 'userId' })
      this.hasMany(Car, { foreignKey: 'userId' })
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      idRole: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Roles',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      avatar: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  )
  return User
}
