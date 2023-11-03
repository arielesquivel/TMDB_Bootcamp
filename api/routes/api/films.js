const router = require("express").Router();

const { film } = require("../../config/db");

router.get("/", async (req, res) => {
  const films = await film.findall();
  res.json(films);
});
router.post("/", async (req, res) => {
  const film = await film.create(req.body);
  res.json(film);
});
router.put("/:filmId", async (req, res) => {
  await Film.update(req.body, {
    where: { id: req.params.filmId },
  });
  res.json({ success: "se modificó" });
});
router.delete("/:filmId", async (req, res) => {
  await film.destroy({ where: { id: req.params.filmId } });
  res.json({ success: "se borro" });
});
module.exports = router;
