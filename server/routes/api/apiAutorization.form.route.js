const router = require('express').Router()
const bcrypt = require('bcrypt')
const { User } = require('../../db/models')

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.json({ message: 'Заполните все поля' })
      return
    }

    const userEmail = await User.findOne({ where: { email } })

    if (!userEmail) {
      res.json({ message: 'Такого юзера не существует' })
      return
    }

    const compare = await bcrypt.compare(password, userEmail.password)
    if (!compare) {
      res.json({ message: 'Пароль не верный' })
      return
    }

    req.session.userId = userEmail.id

    res.json({ message: 'ok' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Внутренняя ошибка сервера' })
  }
})

module.exports = router
