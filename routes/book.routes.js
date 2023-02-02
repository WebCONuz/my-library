const router = require("express").Router();
const {
  createBook,
  findAllBook,
  findOneBook,
  updateBook,
  deleteBook,
  getAllBooksPage,
  getAllBookTablePage,
  addBookPage,
  updateBookPage,
} = require("../controllers/book.controllers");

// GET PAGES
router.get("/", getAllBooksPage);
router.get("/table", getAllBookTablePage);
router.get("/create", addBookPage);
router.get("/edit/:id", updateBookPage);

// CRUD
router.post("/add", createBook);
router.get("/all", findAllBook);
router.get("/:id", findOneBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
