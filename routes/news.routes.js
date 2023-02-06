const router = require("express").Router();
const { getNewsPage, getNewsTable } = require("../controllers/news.controlles");

// GET PAGES
router.get("/", getNewsPage);
router.get("/table", getNewsTable);

module.exports = router;
