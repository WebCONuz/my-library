const config = require("config");
const db = require("../models");
const Admin = db.admin;
const { createViewPath } = require("../helpers/create-view-path");

// @Route   POST /admin/api/signup
// @descr   Create new Admin
// @access  Private
const createAdmin = async (req, res) => {
  try {
    const { password, password2 } = req.body;
    if (password !== password2) {
      return res
        .status(400)
        .send({ message: "Password end re-passwords are not the same!" });
    }
    const admin = {
      full_name: req.body.full_name,
      email: req.body.email,
      password: password,
    };
    const data = await Admin.create(admin);
    return res
      .status(200)
      .send({ message: "Admin is created successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   Get /admin/api/all
// @descr   Get all Admin
// @access  Private
const getAllAdmin = async (req, res) => {
  try {
    const data = await Admin.findAll();
    return res
      .status(200)
      .send({ message: "Request is finished successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   Get /admin/api/:id
// @descr   Get one Admin
// @access  Private
const getOneAdmin = async (req, res) => {
  try {
    const data = await Admin.findByPk(+req.params.id);
    if (!data) {
      return res
        .status(400)
        .json({ message: "This Book is not available in the database" });
    }
    return res
      .status(200)
      .send({ message: "Request is finished successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   PUT /admin/api/:id
// @descr   Update Admin by ID
// @access  Private
const updateAdmin = async (req, res) => {
  try {
    const oldAdmin = await Admin.findByPk(+req.params.id);
    if (!oldAdmin)
      return res
        .status(400)
        .json({ message: "This Book is not available in the database" });

    const data = await Admin.update(req.body, {
      where: { id: +req.params.id },
      returning: true,
    });

    res.status(200).send({ message: "Admin is updated successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   DELETE /admin/api/:id
// @descr   Delete admin by ID
// @access  Private
const deleteAdmin = async (req, res) => {
  try {
    const oldAdmin = await Admin.findByPk(+req.params.id);
    if (!oldAdmin)
      return res
        .status(400)
        .json({ message: "This Book is not available in the database" });

    Admin.destroy({
      where: { id: +req.params.id },
      returning: true,
    });

    res.status(200).send({ message: "Request is finished successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   GET /admin/signup
// @descr   Get Admin sign-up Page
// @access  Private
const getRegisterAdminPage = (req, res) => {
  return res.render(createViewPath("admin/addAdmin"), {
    title: "Register Page",
    isAdmin: true,
    url: config.get("url"),
  });
};

// @Route   GET /admin/login
// @descr   Get Login Page
// @access  Public
const getLoginPage = async (req, res) => {
  return res.render(createViewPath("admin/login"), {
    title: "Login Admin",
    url: config.get("url"),
  });
};

module.exports = {
  createAdmin,
  getAllAdmin,
  getOneAdmin,
  updateAdmin,
  deleteAdmin,
  getRegisterAdminPage,
  getLoginPage,
};
