/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Entities',
      [
        {
          inn: 123456778,
          ogrn: 123123123,
          adres: 'metro',
          userId: 1,
          description: 'xorosha9 firma',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Entities', null, {})
  },
}
