const router = require("express").Router();
const {
  createBook,
  findAllBook,
  findOneBook,
  updateBook,
  deleteBook,
} = require("../controllers/book.controllers");

router.post("/add", createBook);
router.get("/", findAllBook);
router.get("/:id", findOneBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
