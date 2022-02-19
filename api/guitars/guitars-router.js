const router = require("express").Router();
const Guitar = require("./guitars-model");
const {
  validateGuitarId,
  validateGuitarPut,
  validateNewGuitar,
} = require("./guitars-middleware");

router.post("/guitars", validateNewGuitar, async (req, res, next) => {

  await Guitar.insert(req.body)
    .then((guitar) => {
      res.status(201).json(guitar);
    })
    .catch((err) => {
      next(err);
    });
});

router.put(
  "/guitars/:id",
  validateGuitarId,
  validateGuitarPut,
  async (req, res, next) => {

    await Guitar.updateGuitar(req.params.id, req.body)
      .then((updatedPlant) => {
        res.status(200).json(updatedPlant);
      })
      .catch((err) => {
        res.status(404).json(err);
      });
  }
);

router.delete("/guitars/:id", validateGuitarId, async (req, res, next) => {

  const { id } = req.params;

  await Guitar.deleteGuitar(id)
    .then(() => {
      res.status(201).json({ message: "guitar deleted" });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/guitars", (req, res, next) => {
  
  Guitar.getGuitars()
    .then((guitars) => {
      res.status(201).json(guitars);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/guitars/:id", validateGuitarId, (req, res, next) => {
 
  const { id } = req.params;

  Guitar.getGuitarById(id)
    .then((guitar) => {
      res.status(201).json(guitar);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
