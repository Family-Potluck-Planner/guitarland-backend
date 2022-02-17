exports.up = function (knex) {
    return knex.schema.createTable("guitars", guitars => {
      guitars.increments();
      guitars.string("brand", 128)
        .notNullable()
      guitars.string("model", 128)
      .notNullable()
      guitars.string("year", 128)
      .notNullable();
      guitars.string("name", 128)
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("guitars");
  };