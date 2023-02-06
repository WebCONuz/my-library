const router = require("express").Router();
const {
  getNewsPage,
  getNewsTable,
  getAddNewsPage,
  getEditNewsPage,
} = require("../controllers/news.controlles");

// GET PAGES
router.get("/", getNewsPage);
router.get("/table", getNewsTable);
router.get("/add", getAddNewsPage);
router.get("/edit", getEditNewsPage);

module.exports = router;
