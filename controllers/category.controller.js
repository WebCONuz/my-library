const db = require("../models");
const config = require("config");
const Category = db.category;
const { createViewPath } = require("../helpers/create-view-path");

// @Route   POST /category/add
// @descr   Add new category to DB
// @access  Prived
const createCategory = async (req, res) => {
  try {
    // Create a Category
    const category = {
      category: req.body.category,
    };

    // Save Category in the database
    const data = await Category.create(category);

    res.status(201).send({ message: "Category is created successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   GET /category
// @descr   Get all category
// @access  Public
const findAllCategory = async (req, res) => {
  try {
    const data = await Category.findAll();
    res.status(200).send({ message: "Request is finished successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   GET /category/:id
// @descr   Get one category by ID
// @access  Public
const findOneCategory = async (req, res) => {
  try {
    const data = await Category.findByPk(+req.params.id);
    if (!data)
      return res
        .status(400)
        .json({ message: "Bunday Category bazada mavjud emas" });

    res.status(200).send({ message: "Request is finished successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   PUT /category/:id
// @descr   Update category by ID
// @access  Private
const updateCategory = async (req, res) => {
  try {
    const oldCategory = await Category.findByPk(+req.params.id);
    if (!oldCategory)
      return res
        .status(400)
        .json({ message: "Bunday Category bazada mavjud emas" });

    const data = await Category.update(req.body, {
      where: { id: +req.params.id },
      returning: true,
    });

    res.status(200).send({ message: "Category is updated successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   DELETE /category/:id
// @descr   Delete category by ID
// @access  Private
const deleteCategory = async (req, res) => {
  try {
    const oldCategory = await Category.findByPk(+req.params.id);
    if (!oldCategory)
      return res
        .status(400)
        .json({ message: "Bunday Category bazada mavjud emas" });

    const data = Category.destroy({
      where: { id: +req.params.id },
    });

    res.status(200).send({ message: "Request is finished successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   GET /category/create
// @descr   Get Add category Page
// @access  Private
const getAddCategoryPage = (req, res) => {
  try {
    return res.render(createViewPath("admin/addCategory"), {
      title: "Add Category",
      isAdmin: true,
      url: config.get("url"),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   GET /category/edit/:id
// @descr   GET Update category page
// @access  Private
const getEditCategoryPage = async (req, res) => {
  try {
    const updateted = await Category.findByPk(+req.params.id);
    if (!updateted)
      return res
        .status(400)
        .json({ message: "Bunday Category bazada mavjud emas" });

    return res.render(createViewPath("admin/editCategory"), {
      title: "Edit Category",
      url: config.get("url"),
      category: updateted.category,
      id: req.params.id,
      isAdmin: true,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  createCategory,
  findAllCategory,
  findOneCategory,
  updateCategory,
  deleteCategory,
  getAddCategoryPage,
  getEditCategoryPage,
};
