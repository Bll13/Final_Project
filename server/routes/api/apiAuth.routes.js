const router = require('express').Router()
const bcrypt = require('bcrypt')
const { User, Role, Entity, Car } = require('../../db/models')

router.post('/reg', async (req, res) => {
  try {
    const { name, password, email, phoneNumber, idRole, avatar } = req.body
    if (name && password && email && phoneNumber && idRole) {
      const user = await User.findOne({ where: { email } })
      if (!user) {
        const hashPassword = await bcrypt.hash(password, 10)
        let newUser
        if (avatar) {
          newUser = await User.create({
            name,
            password: hashPassword,
            email,
            phoneNumber,
            idRole,
            avatar,
          })
        } else {
          newUser = await User.create({
            name,
            password: hashPassword,
            email,
            idRole,
            phoneNumber,
          })
        }
        req.session.userId = newUser.id
        res.status(200).json({ message: 'ok', user: newUser })
      } else {
        res.status(400).json({ message: 'Такой пользователь уже существует' })
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' })
    }
  } catch (error) {
    res.json({ messageError: error.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { password, email } = req.body
    console.log(password, email, '------123----')
    if (password && email) {
      let user = await User.findOne({ where: { email } })
      console.log(user)
      if (user && (await bcrypt.compare(password, user.password))) {
        user = await User.findOne({
          where: { email },
          exclude: ['password', 'createdAt', 'updatedAt'],
          include: [
            { model: Role, exclude: ['createdAt', 'updatedAt'] },
            { model: Entity, exclude: ['createdAt', 'updatedAt'] },
            { model: Car, exclude: ['createdAt', 'updatedAt'] },
          ],
        })

        req.session.userId = user.id
        res.json({ message: 'ok', user })
      } else {
        res.json({ message: 'Логин или пароль не совпадают' })
      }
    } else {
      res.json({ message: 'Заполните все поля' })
    }
  } catch (error) {
    res.json({ messageError: error.message })
  }
})
router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' })
    }

    res.clearCookie('user_sid').json({ message: 'Успешный выход' })
  })
})
router.get('/verification', async (req, res) => {
  try {
    const { userId } = req.session
    if (userId) {
      const user = await User.findOne({
        where: { id: userId },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      })
      res.status(201).json(user)
    } else {
      res.status(403).json({ message: 'не в сети' })
    }
  } catch ({ message }) {
    res.status(500).json({ message })
  }
})

module.exports = router
