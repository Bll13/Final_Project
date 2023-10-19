const router = require('express').Router()
const { CardBuy, Photo } = require('../../db/models')

router.get('/', async (req, res) => {
  try {
    const posts = await CardBuy.findAll({
      include: { model: Photo },
    })
    res.status(200).json({ message: 'ok', posts })
  } catch ({ message }) {
    res.status(500).json({ message: 'error' })
  }
})

router.get('/:idPost', async (req, res) => {
  try {
    const { idPost } = req.params
    const post = await CardBuy.findOne({ where: { id: idPost } })
    res.status(200).json({ message: 'ok', post })
  } catch ({ message }) {
    res.status(500).json({ message: 'error' })
  }
})

router.delete('/:idPostBuyId', async (req, res) => {
  try {
    const { idPostBuyId } = req.params
    const post = await CardBuy.findOne({ where: { id: idPostBuyId } })

    if (post.userId === req.session.userId) {
      const respons = await CardBuy.destroy({ where: { id: idPostBuyId } })
      if (respons) {
        res.status(200).json({ id: post.id })
      }
    } else {
      res.status(400).json({ message: 'Произошла ошибка при удалении' })
    }
  } catch ({ message }) {
    res.status(500).json({ message })
  }
})

module.exports = router
