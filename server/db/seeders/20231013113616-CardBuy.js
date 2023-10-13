/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'CardBuys',
      [
        {
          adres: 'les',
          userId: 1,
          price: 100,
          ves: 100,
          category: 'les',
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          adres: 'tam',
          userId: 2,
          price: 1000,
          ves: 1000,
          category: 'kamen',
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          adres: 'tyt',
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
