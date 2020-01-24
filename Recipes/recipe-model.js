const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(schemeId) {
  return db("schemes").where({ id: schemeId });
}

function add(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(changes, recipeId) {
  return db("recipes")
    .where({ id: recipeId })
    .update(changes);
}

function remove(recipeId) {
  return db("schemes")
    .where({ id: recipeId })
    .del();
}
