const express = require("express");

const server = express();

const recipeRouter = require("./Recipes/recipe-router");
const ingredientRouter = require("./Ingredients/ingredient-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Recipe API");
});

server.use("/api/recipes", recipeRouter);
server.use("/api/ingredients", ingredientRouter);

module.exports = server;
