const router = require("express").Router();
const {
  createCategory,
  findAllCategory,
  findOneCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");

router.post("/api/add", createCategory);
router.get("/api/all", findAllCategory);
router.get("/api/:id", findOneCategory);
router.put("/api/:id", updateCategory);
router.delete("/api/:id", deleteCategory);

module.exports = router;
