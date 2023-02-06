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
// @access  Private
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

// @Route   GET /news/add
// @descr   Get add News Page
// @access  Private
const getAddNewsPage = async (req, res) => {
  try {
    res.render("news/addNews", {
      title: "Add News",
      url: config.get("url"),
      isAdmin: true,
    });
  } catch (err) {
    console.log(err);
  }
};

// @Route   GET /news/edit
// @descr   Get Edit News Page
// @access  Private
const getEditNewsPage = async (req, res) => {
  try {
    res.render("news/editNews", {
      title: "Edit News",
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
  getAddNewsPage,
  getEditNewsPage,
};
