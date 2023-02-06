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
router.post("/api/add", createBook);
router.get("/api/all", findAllBook);
router.get("/api/:id", findOneBook);
router.put("/api/:id", updateBook);
router.delete("/api/:id", deleteBook);

module.exports = router;
