const db = require('../data/dbConfig')
const Guitar = require('./guitars-model');

const validateGuitarId = async (req, res, next) => {
  const guitarRows = await Guitar.getGuitarById(req.params.id);
  if (guitarRows.length === 0) {
    res.status(404).json({ message: "That guitar ID doesn't exist!" });
  } else {
    next();
  }
};

async function validateNewGuitar(req, res, next) {

  const { brand, model, year} = req.body;
//   const testGuitar = await Guitar.findBy({ plant: plant });

//   const isPlant = await Guitar.findBy({ plant: plant });
//   const isNickname = await Plant.findBy({ nickname: nickname });

  if (!brand || !model || !year ) {
    res.status(404).json({ message: "please fill out all required fields" });
  } else {
    next();
  }
}

function validateGuitarPut(req, res, next) {
  const { brand, model, year, name } = req.body;

  !brand && !model && !year && !name
    ? res
        .status(404)
        .json({ message: "Please include at least one item to update" })
    : next();
}

module.exports = {
  validateGuitarId,
  validateNewGuitar,
  validateGuitarPut,
};