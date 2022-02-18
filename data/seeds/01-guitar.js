exports.seed = function (knex) {
    return knex("guitars").insert({
      brand: "Fender",
      model: "Telecaster",
      year: "1956",
      name: "Tele",
    });
  };