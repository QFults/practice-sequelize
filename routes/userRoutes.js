const users = require("express").Router();
const { User, Movie } = require("../models");

users.get("/", async (req, res) => {
  try {
    const users = await User.findAll({ include: [Movie] });
    return res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

users.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } })

    if (!user) {
      res.status(404).json({ message: 'Login failed.' })
      return
    }

    console.log(user.getRandNum())

    const validPassword = await user.checkPassword(req.body.password)

    if (!validPassword) {
      res.status(400).json({ message: 'Login failed.' })
      return
    }

    res.status(200).json({ message: "Login Successful!"})
  } catch (err) {
    res.status(500).json(err)
  }
})

users.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

users.put("/:id", async (req, res) => {
  try {
    const id = await User.update(req.body, { 
      where: { id: req.params.id },
      individualHooks: true 
    });
    return res.json({ id });
  } catch (err) {
    res.status(500).json(err);
  }
});

users.delete("/:id", async (req, res) => {
  try {
    const id = await User.destroy({ where: { id: req.params.id } });
    return res.json({ id });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = users;
