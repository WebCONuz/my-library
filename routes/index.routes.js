const router = require("express").Router();

router.use("/books", require("./book.routes"));
router.use("/category", require("./category.routes"));

module.exports = router;
