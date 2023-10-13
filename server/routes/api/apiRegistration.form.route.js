const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");


router.post("/", async (req, res) => {
  try {
    const { name, email, password, group, year} = req.body;
    let userEmail = await User.findOne({ where: { email } });
    if (!name || !email || !password || !group || !year) {
      res.json({ message: "Заполните все поля" });
      return;
    }
    if (userEmail) {
      res.json({ message: "Такой емаил уже занят" });
      return;
    }
  
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash, group, year });
    req.session.userId = user.id;

    res.json({ message: "ok", user });
  } catch (message) {
    console.log(message);
  }
});




module.exports = router;
