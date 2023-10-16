const router = require('express').Router()
const { User, Entity, CardBuy } = require('../../db/models')

router.get('/', async (req, res) => {
  try {
    const entityArr = await Entity.findAll({
      raw: true,
      include: [{ model: User, attributes: ['name'] }],
    })
    const cardBuyArr = await CardBuy.findAll({
      raw: true,
      include: [{ model: User, attributes: ['name'] }],
    })
    const marcers = [...entityArr, ...cardBuyArr].map((el) => ({
      coordinates: el.adres.split(',').map((elm) => Number(elm)),
      content: el['User.name'],
    }))
    res.json({ message: 'ok', marcers })
  } catch (error) {
    res.json({ messageError: error.message })
  }
}),
  (module.exports = router)
