/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Entities',
      [
        {
          inn: 7840024137,
          ogrn: 1157847063770,
          adres: 'г.Санкт-Петербург,пр-т Большевиков, дом 56, корпус 4 ',
          adresCod: '59.8896,30.28953',
          url: 'https://vtorressurs.ru/',
          userId: 1,
          description:
            'Компания ООО «ВторРесурс» предлагает лучшие условия на вывоз вторсырья из пластмассы, пластика, ПЭТ и ПНД для организаций и частных лиц в Санкт-Петербурге и Ленобласти.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          inn: 7840024137,
          ogrn: 1157847063770,
          adres: 'г. Санкт-Петербург, Химический пер., д.12, литера К. ',
          adresCod: '59.8896,30.28953',
          url: 'https://vtorressurs.ru/',
          userId: 1,
          description:
            'Компания ООО «ВторРесурс» предлагает лучшие условия на вывоз вторсырья из пластмассы, пластика, ПЭТ и ПНД для организаций и частных лиц в Санкт-Петербурге и Ленобласти.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          inn: 7839501353,
          ogrn: 1147847300996,
          adres: 'г.Санкт-Петербург, ул. Салова, д. 37, литер а',
          adresCod: '59.8938,30.38204',
          url: 'https://zavrecycle.ru/o-kompanii/',
          userId: 2,
          description: 'sdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          inn: 7810724974,
          ogrn: 1187847080497,
          adres: 'г. Санкт-Петербург, Промышленная ул., 7.',
          adresCod: '59.8983860,30.2680690',
          url: 'https://spb-ecotrans.ru/',
          userId: 3,
          description: 'sdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          inn: 4726002037,
          ogrn: 1154704000802,
          adres: 'г. Санкт-Петербург, Малая Разночинная ул., 9 ',
          adresCod: '59.913782172940365,30.35027170522696',
          url: 'http://unepspb.ru/contact/',
          userId: 4,
          description: 'sdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          inn: 7806169573,
          ogrn: 1157847171943,
          adres: 'г. Санкт-Петербург, Уманский переулок 74, оф. 201',
          adresCod: '59.969281,30.451343',
          url: 'https://othodopasen.ru/',
          userId: 5,
          description: 'sdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // тут всё правильно
        {
          inn: 3528214550,
          ogrn: 1143528005510,
          adres: 'г. Санкт-Петербург, просп. Обуховской Обороны, 120Л ',
          adresCod: '59.913782172940365,30.35027170522696',
          url: 'http://pcenter-rf.ru/',
          userId: 6,
          description: 'sdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          inn: 7729152149,
          ogrn: 1037700232558,
          adres: 'г. Санкт-Петербург, Панфилова ул., 12 ',
          adresCod: '59.952385,30.411745',
          url: '',
          userId: 7,
          description:
            'Что можно сдать: бытовая техника, одежда и текстиль, батарейки, пластик, опасные отходы, лампочки',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          inn: 7722284869,
          ogrn: 1037722013120,
          adres: 'г. Санкт-Петербург, 3-й Рыбацкий пр., 7В',
          adresCod: '52.232548,104.275647',
          url: 'https://zavodtekon.ru/',
          userId: 8,
          description: 'asd',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          inn: 7839429139,
          ogrn: 1107847247749,
          adres: 'г. Санкт-Петербург, просп. Девятого Января, 21 ',
          adresCod: '59.843833,30.453158',
          url: 'https://promecology.spb.ru/',
          userId: 9,
          description:
            'Мы работаем в различных направлениях по сохранению окружающей среды: cбор, транспортировка и утилизация жидких отходов, очистка систем наружной канализации, покупка тёмных нефтепродуктов, вывоз отходов бурения, демонтаж зданий, благоустройство.',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          inn: 7801014537,
          ogrn: 1027800512255,
          adres:
            ' Санкт-Петербург, Калининский район, муниципальный округ Пискарёвка',
          adresCod: '59.993532,30.404801',
          url: 'https://ecospbcom.ru/',
          userId: 10,
          description:
            'СПб ГУП «Экострой» создано в сентябре 1990 года в виде малого специализированного строительно-монтажного предприятия «Экострой» на базе специализированного строительно-монтажного управления «Спецтранс».',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          inn: 7806021048,
          ogrn: 1037825017229,
          adres: 'г. Санкт-Петербург, ул. Крупской д. 55 оф. 25',
          adresCod: '59.88808,30.41635',
          url: 'https://ecologspb.com/',
          userId: 11,
          description:
            'Общество с ограниченной ответственностью «Эколог» - одна из старейших компаний Санкт-Петербурга и Ленинградской области на рынке экологических услуг.',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          inn: 7825490380,
          ogrn: 1027809203014,
          adres:
            'г. Санкт-Петербург, Бумажная ул, д. 9 к. 1 литера А, офис 406 помещ. 11-н ',
          adresCod: '59.905254,30.270620',
          url: 'https://es-russia.com/',
          userId: 12,
          description:
            'Компания «ЭКО СЕРВИС» предоставляет услуги по вывозу отходов предприятий, магазинов, торговых центров, объектов общественного питания и муниципальных объектов.  ',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          inn: 7810358943,
          ogrn: 1157847219727,
          adres: '  г. Санкт-Петербург, Рощинская ул., д. 3 ',
          adresCod: '59.884140,30.310110',
          url: 'https://avtospek.ru/',
          userId: 13,
          description:
            ' Мы предоставляем услуги по вывозу мусора для физических лиц, индивидуальных предпринимателей и юридических лиц. Мы работаем как с наличным так и с безналичным расчётом, так что при заказе вывоза мусора у Вас не возникнет дополнительных проблем.',

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
