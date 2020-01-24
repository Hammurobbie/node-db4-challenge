exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      name: "Big Poppa's Canoli",
      quantity: "2 cups",
      instructions: "Mix all that shit up and voila!",
      recipe_id: 2
    },
    {
      name: "Fat Susan's Butterball",
      quantity: "4 cups",
      instructions: "Mix all that shit up and voila!",
      recipe_id: 1
    },
    {
      name: "Ugly Tony's Stromboli",
      quantity: "6 cups",
      instructions: "Mix all that shit up and voila!",
      recipe_id: 3
    }
  ]);
};
