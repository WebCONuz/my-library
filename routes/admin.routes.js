const router = require("express").Router();
const {
  getRegisterAdminPage,
  getLoginPage,
  createAdmin,
  getAllAdmin,
  getOneAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/admin.controllers");

// GET PAGES
router.get("/login", getLoginPage);
router.get("/signup", getRegisterAdminPage);

// CRUD
router.post("/api/signup", createAdmin);
router.get("/api/all", getAllAdmin);
router.get("/api/:id", getOneAdmin);
router.put("/api/:id", updateAdmin);
router.delete("/api/:id", deleteAdmin);

module.exports = router;
