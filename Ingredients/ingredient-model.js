const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("ingredients");
}

function findById(schemeId) {
  return db("schemes").where({ id: schemeId });
}

function add(ingredient) {
  return db("ingredients")
    .insert(ingredient)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(changes, ingredientId) {
  return db("ingredients")
    .where({ id: ingredientId })
    .update(changes);
}

function remove(ingredientId) {
  return db("ingredients")
    .where({ id: ingredientId })
    .del();
}
