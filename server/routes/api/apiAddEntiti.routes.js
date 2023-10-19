const router = require('express').Router()
const { Entity } = require('../../db/models')

router.post('/', async (req, res) => {
  try {
    const { inn, ogrn, url, adres } = req.body
    if (inn && ogrn && url && adres) {
      const enti = await Entity.create({
        inn,
        ogrn,
        url,
        adres,
        userId: req.session.userId,
      })
      res.status(200).json({ message: 'ok', enti })
    } else {
      res.status(400).json({ message: 'заполните все поля' })
    }
  } catch (error) {
    res.json({ messageError: error.message })
  }
})

module.exports = router
