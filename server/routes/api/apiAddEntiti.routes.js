const router = require('express').Router()
const { Entity } = require('../../db/models')

router.post('/', async (req, res) => {
  try {
    const { inn, ogrn, url, adres, adresCod, description } = req.body

    if (inn && ogrn && url && adres && description) {
      const enti = await Entity.create({
        inn,
        ogrn,
        url,
        adres,
        adresCod: `${adresCod[0]},${adresCod[1]}`,
        description,
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
