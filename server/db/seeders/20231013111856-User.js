/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: 'Doe@Doe.com',
          password: '12345',
          idRole: 1,
          rating: 3,
          phoneNumber: '555-666-777',
          avatar: 'nety',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ivan Ivan',
          email: 'Iv@Doe.com',
          password: '54321',
          idRole: 2,
          rating: 4,
          phoneNumber: '111-222-333',
          avatar: 'nety',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Baikal Baikal',
          email: 'Baikal@DoDo.com',
          password: '54345',
          idRole: 3,
          rating: 4,
          phoneNumber: '666-777-888',
          avatar: 'nety',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {})
  },
}
