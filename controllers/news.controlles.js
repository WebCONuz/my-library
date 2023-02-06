const config = require("config");
const { createViewPath } = require("../helpers/create-view-path");

// @Route   GET /news
// @descr   Get News Page
// @access  Public
const getNewsPage = async (req, res) => {
  res.render(createViewPath("news/news"), {
    title: "News Page",
    url: config.get("url"),
  });
};

// @Route   GET /news/table
// @descr   Get table of all news
// @access  Privete
const getNewsTable = async (req, res) => {
  try {
    res.render("news/newsTable", {
      title: "News Table",
      url: config.get("url"),
      isAdmin: true,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getNewsPage,
  getNewsTable,
};
