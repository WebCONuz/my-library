const router = require("express").Router();

router.use("/books", require("./book.routes"));

module.exports = router;
