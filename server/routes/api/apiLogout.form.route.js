const router = require('express').Router()
// const bcrypt = require("bcrypt");
// const { User } = require("../../db/models");

router.get('/', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сесии ' })
    }
    res.clearCookie('user_sid')
    res.redirect('/')
  })
})

module.exports = router
