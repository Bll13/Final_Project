/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CardBuys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      photo: {
        type: Sequelize.STRING,
        defaultValue:
          'https://yt3.googleusercontent.com/JMxe17W3N7p9YPRmZQo_gNr34jifpit3rO3wQ5-Sd6LMrqnmPEUHkeYeP2wY9oRu3k7JFM6yfA=s900-c-k-c0x00ffffff-no-rj',
      },
      adres: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ves: {
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      obm: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CardBuys')
  },
}
