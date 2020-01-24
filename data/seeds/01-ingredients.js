exports.seed = function(knex) {
  return knex("ingredients").insert([
    { name: "Barley" },
    { name: "Pepper" },
    { name: "Provolone Cheese" },
    { name: "Paprika" }
  ]);
};
