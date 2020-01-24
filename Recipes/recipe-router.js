const express = require("express");

const recipes = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
  recipes
    .find()
    .then(recipe => res.json(recipe))
    .catch(err => {
      res.status(500).json({ message: "The recipes could not be returned" });
      console.log(err.message);
    });
});

router.get("/:id", (req, res) => {
  recipes
    .findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => {
      res.status(500).json({ message: "The recipes could not be returned" });
      console.log(err.message);
    });
});

module.exports = router;
