const router = require("express").Router();

router.use("/admin", require("./admin.routes"));
router.use("/books", require("./book.routes"));
router.use("/news", require("./news.routes"));
router.use("/category", require("./category.routes"));
router.use("/", require("./views.routes"));

module.exports = router;
