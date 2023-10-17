/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'CardBuys',
      [
        {
          adresCod: '59.87475989501737,30.301169346701798',
          adres: 'Благодатная 9',
          userId: 1,
          price: 100,
          ves: 100,
          category: 'les',
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          adresCod: '59.87480304583944,30.302038382422634',
          adres: 'Благодатная 13',
          userId: 2,
          price: 1000,
          ves: 1000,
          category: 'kamen',
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          adres: 'Благодатная 23',
          adresCod: '59.87493311838197,30.30801671131229',
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
