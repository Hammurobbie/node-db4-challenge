exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .text("name")
        .unique()
        .notNullable();
    })
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .text("name")
        .unique()
        .notNullable();
      tbl.text("quantity").notNullable();
      tbl.text("instructions").notNullable();
      tbl
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients");
};
