const config = require("config");
const { createViewPath } = require("../helpers/create-view-path");

// @Route   GET /
// @descr   Get Main Page
// @access  Public
const mainPage = async (req, res) => {
  res.render(createViewPath("home"), {
    title: "Home Page",
    url: config.get("url"),
  });
};

module.exports = {
  mainPage,
};
