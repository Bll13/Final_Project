/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Photos',
      [
        {
          url: 'https://fs.edu21.cap.ru/content22/15/org-test/6274731e-1502-4a36-b052-b1c0def75088/gora_sm.jpeg',
          cardBuyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://fs.edu21.cap.ru/content22/15/org-test/6274731e-1502-4a36-b052-b1c0def75088/gora_sm.jpeg',
          cardBuyId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://fs.edu21.cap.ru/content22/15/org-test/6274731e-1502-4a36-b052-b1c0def75088/gora_sm.jpeg',
          cardBuyId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://fs.edu21.cap.ru/content22/15/org-test/6274731e-1502-4a36-b052-b1c0def75088/gora_sm.jpeg',
          cardBuyId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://fs.edu21.cap.ru/content22/15/org-test/6274731e-1502-4a36-b052-b1c0def75088/gora_sm.jpeg',
          cardBuyId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://fs.edu21.cap.ru/content22/15/org-test/6274731e-1502-4a36-b052-b1c0def75088/gora_sm.jpeg',
          cardBuyId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://fs.edu21.cap.ru/content22/15/org-test/6274731e-1502-4a36-b052-b1c0def75088/gora_sm.jpeg',
          cardBuyId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://fs.edu21.cap.ru/content22/15/org-test/6274731e-1502-4a36-b052-b1c0def75088/gora_sm.jpeg',
          cardBuyId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://fs.edu21.cap.ru/content22/15/org-test/6274731e-1502-4a36-b052-b1c0def75088/gora_sm.jpeg',
          cardBuyId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos', null, {})
  },
}
