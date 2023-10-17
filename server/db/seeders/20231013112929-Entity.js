/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Entities',
      [
        {
          inn: 123456778,
          ogrn: 123123123,
          adres: 'Московский проспект 137',
          adresCod: '59.913782172940365, 30.35027170522696',
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
