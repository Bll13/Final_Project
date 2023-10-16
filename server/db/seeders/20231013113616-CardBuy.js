/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'CardBuys',
      [
        {
          adres: '59.90616325435614, 30.317502043899943',
          userId: 1,
          price: 100,
          ves: 100,
          category: 'les',
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          adres: '59.92244874319101, 30.300085825113875',
          userId: 2,
          price: 1000,
          ves: 1000,
          category: 'kamen',
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          adres: '59.92614519501319,30.288309694394986',
          userId: 3,
          price: 10000,
          ves: 10000,
          category: 'ygol',
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('CardBuys', null, {})
  },
}
