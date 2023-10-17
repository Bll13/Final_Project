const router = require('express').Router()
const { CardBuy } = require('../../db/models')

router.get('/', async (req, res) => {
  try {
    const posts = await CardBuy.findAll()
    console.log(posts)
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

module.exports = router
