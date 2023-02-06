const router = require("express").Router();
const {
  createCategory,
  findAllCategory,
  findOneCategory,
  updateCategory,
  deleteCategory,
  getAddCategoryPage,
  getEditCategoryPage,
} = require("../controllers/category.controller");

router.get("/create", getAddCategoryPage);
router.get("/edit/:id", getEditCategoryPage);
router.post("/add", createCategory);
router.get("/all", findAllCategory);
router.get("/:id", findOneCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
