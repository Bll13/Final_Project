const router = require('express').Router()
const { CardBuy, Photo } = require('../../db/models')
const fileUpload = require('../../utils/fileUpload')

router.post('/', async (req, res) => {
  try {
    const { category, adres, ves, price, obm } = req.body
    const file = req.files?.url
    console.log(file.name, 'kkkkkkkkkkkkkkkkkkkkk')

    const arrUrl = await Promise.all(file.map((el) => fileUpload(el)))

    console.log(arrUrl)

    if (adres && price && ves) {
      const post = await CardBuy.create({
        category,
        adres,
        ves,
        price,
        status: false,
        obm,
        userId: req.session.userId,
      })

      await Promise.all(
        arrUrl.map((el) => Photo.create({ url: el, cardBuyId: post.id })),
      )

      const newPost = await CardBuy.findOne({
        where: {id: post.id}, include: {model: Photo}
      })

      res.status(201).json({ newPost, message: 'ok' })
      console.log(post, '66666666666666666666')
    } else {
      res.status(401).json({ message: 'заполните все поля' })
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json(error.message)
  }
})

module.exports = router
