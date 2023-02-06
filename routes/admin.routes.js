const router = require("express").Router();
const {
  getRegisterAdminPage,
  getLoginPage,
} = require("../controllers/admin.controllers");

// GET PAGES
router.get("/login", getLoginPage);
router.get("/signup", getRegisterAdminPage);

// CRUD
// router.post("/api/add", createBook);
// router.get("/api/all", findAllBook);
// router.get("/api/:id", findOneBook);
// router.put("/api/:id", updateBook);
// router.delete("/api/:id", deleteBook);

module.exports = router;
