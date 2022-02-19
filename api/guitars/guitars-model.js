const db = require('../../data/dbConfig');

function getGuitar() {
  return db("guitars");
}

async function getGuitarById(guitar_id) {
  const guitarRows = await db("guitars").select().where("id", guitar_id);
  return guitarRows;
}

async function deleteGuitar(id) {
  return db("guitars").where({ id }).del();
}

function updateGuitar(id, changes) {
  return db("guitars")
    .where("id", id)
    .update(changes)
    .then((count) => (count > 0 ? getGuitarById(id) : null));
}

function findBy(filter) {
  return db("guitars").where(filter); // {username: "foo"}
}

function insert(guitar) {
  return db("guitars")
    .insert(guitar)
    .then(([id]) => {
      return getGuitarById(id);
    });
}

module.exports = {
  getGuitar,
  getGuitarById,
  deleteGuitar,
  updateGuitar,
  findBy,
  insert,
};
