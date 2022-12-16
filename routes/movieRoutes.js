const movies = require("express").Router();
const { Movie, User } = require("../models");

movies.get("/", async (req, res) => {
  try {
    const movies = await Movie.findAll({ include: [User] });
    return res.json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
});

movies.post("/", async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    return res.json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

movies.put("/:id", async (req, res) => {
  try {
    const id = await Movie.update(req.body, {
      where: { id: req.params.id }
    });
    return res.json({ id });
  } catch (err) {
    res.status(500).json(err);
  }
});

movies.delete("/:id", async (req, res) => {
  try {
    const id = await Movie.destroy({ where: { id: req.params.id } });
    return res.json({ id });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = movies;
