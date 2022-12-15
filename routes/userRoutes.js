const users = require("express").Router();
const { User } = require("../models");

users.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

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
    const id = await User.update(req.body, { where: { id: req.params.id } });
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
