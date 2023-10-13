/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          title: 'Юридическое лицо',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Физическое лицо',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Водительское лицо',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Roles', null, {})
  },
}
