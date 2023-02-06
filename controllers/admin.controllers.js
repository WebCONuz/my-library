const config = require("config");
const { createViewPath } = require("../helpers/create-view-path");

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
  getRegisterAdminPage,
  getLoginPage,
};
