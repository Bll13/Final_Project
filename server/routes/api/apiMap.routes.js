const router = require('express').Router()
const { User, Entity, CardBuy } = require('../../db/models')

router.get('/entity', async (req, res) => {
  try {
    const entityArr = await Entity.findAll({
      raw: true,
      include: [{ model: User, attributes: ['name'] }],
    })

    const enti = [...entityArr].map((el, i) => ({
      coordinates: el.adresCod.split(',').map((elm) => Number(elm)),
      content: el.adres,
      id: el.id,
      name: el['User.name'],
      price: el.price,
      inn: el.inn,
      ogrn: el.ogrn,
      adres: el.adres,
      adresCod: el.adresCod.split(',').map((elm) => Number(elm)),
      url: el.url,
      description: el.description,
    }))
 
    res.json({ message: 'ok', enti })
  } catch (error) {
    res.json({ messageError: error.message })
  }
}),
  router.get('/carBuy', async (req, res) => {
    try {
      const cardBuyArr = await CardBuy.findAll({
        raw: true,
        include: [{ model: User, attributes: ['name'] }],
      })
      const card = [...cardBuyArr].map((el, i) => ({
        coordinates: el.adresCod.split(',').map((elm) => Number(elm)),
        content: el.adres,
        id: el.id,
        name: el['User.name'],
        price: el.price,
      }))
      console.log(card, 'cardcardcardcard')
      res.json({ message: 'ok', card })
    } catch (error) {
      res.json({ messageError: error.message })
    }
  })

router.post('/carBuy', async (req, res) => {
  try {
    const { adresCod, adres, price } = req.body
    const post = await CardBuy.create({
      adresCod: `${adresCod[0]},${adresCod[1]}`,
      adres,
      price,
      userId: req.session.userId,
    })
    const postCardBuy = {
      coordinates: post.adresCod.split(',').map((elm) => Number(elm)),
      content: post.adres,
      id: post.id,
    }
    res.json({ message: 'ok', postCardBuy })
  } catch (error) {
    res.json({ messageError: error.message })
  }
})
module.exports = router
