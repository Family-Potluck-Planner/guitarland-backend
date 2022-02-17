exports.seed = function (knex) {
    return knex("plants").insert({
      brand: "Fender",
      model: "Telecaster",
      year: "1956",
      name: "Tele",
    });
  };