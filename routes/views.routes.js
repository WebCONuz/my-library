const router = require("express").Router();
const { mainPage } = require("../controllers/views.controllers");

router.get("/", mainPage);

module.exports = router;
