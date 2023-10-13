/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Cars',
      [
        {
          marckCar: 'BMW',
          tonnageCar: 500,
          bodyType: 'pikap',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          marckCar: 'MAZ',
          tonnageCar: 5000,
          bodyType: 'samosval',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          marckCar: 'URAL',
          tonnageCar: 50000,
          bodyType: 'kamaz',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cars', null, {})
  },
}
