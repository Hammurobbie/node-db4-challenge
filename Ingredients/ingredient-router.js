const express = require("express");

const ingredients = require("./ingredient-model");

const router = express.Router();

router.get("/", (req, res) => {
  ingredients
    .find()
    .then(ing => res.json(ing))
    .catch(err => {
      res
        .status(500)
        .json({ message: "The ingredients could not be returned" });
      console.log(err.message);
    });
});

module.exports = router;
