const db = require("../models");
const Book = db.book;
const Category = db.category;
const config = require("config");
const { createViewPath } = require("../helpers/create-view-path");

// @Route   POST /api/books/add
// @descr   Add new book to DB
// @access  Private
const createBook = async (req, res) => {
  try {
    // Create a Book
    const book = {
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      bookImg: req.body.bookImg,
      bookFile: req.body.bookFile,
      //   bookImg: "/uploads/" + req.files.bookImg[0].filename,
      //   bookFile: "/uploads/" + req.files.bookFile[0].filename,
    };

    // Save Book in the database
    const data = await Book.create(book);

    res.status(201).send({ message: "Book is created successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   GET /api/books/all
// @descr   Get all books
// @access  Public
const findAllBook = async (req, res) => {
  try {
    const data = await Book.findAll();
    res.status(200).send({ message: "Request is finished successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   GET /api/books/:id
// @descr   Get one book by ID
// @access  Public
const findOneBook = async (req, res) => {
  try {
    const data = await Book.findByPk(+req.params.id);
    if (!data)
      return res
        .status(400)
        .json({ message: "Bunday Book bazada mavjud emas" });

    res.status(200).send({ message: "Request is finished successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   PUT /api/books/:id
// @descr   Update book by ID
// @access  Private
const updateBook = async (req, res) => {
  try {
    const oldBook = await Book.findByPk(+req.params.id);
    if (!oldBook)
      return res
        .status(400)
        .json({ message: "Bunday Book bazada mavjud emas" });

    const data = await Book.update(req.body, {
      where: { id: +req.params.id },
      returning: true,
    });

    res.status(200).send({ message: "Book is updated successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   DELETE /api/books/:id
// @descr   Delete book by ID
// @access  Private
const deleteBook = async (req, res) => {
  try {
    const oldBook = await Book.findByPk(+req.params.id);
    if (!oldBook)
      return res
        .status(400)
        .json({ message: "Bunday Book bazada mavjud emas" });

    const data = Book.destroy({
      where: { id: +req.params.id },
    });

    res.status(200).send({ message: "Request is finished successfully", data });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// @Route   GET /api/books
// @descr   Get all books Page
// @access  Public
const getAllBooksPage = async (req, res) => {
  try {
    const allbooks = await Book.findAll();
    res.render(createViewPath("books/books"), {
      title: "Books Page",
      url: config.get("url"),
      books: allbooks.reverse(),
    });
  } catch (err) {
    console.log(err);
  }
};

// @Route   GET /api/books/table
// @descr   Get table page
// @access  Private
const getAllBookTablePage = async (req, res) => {
  try {
    const allbooks = await Book.findAll();
    const category = await Category.findAll();
    res.render(createViewPath("books/booksTable"), {
      title: "Table of Books",
      url: config.get("url"),
      isAdmin: true,
      books: allbooks,
      category,
    });
  } catch (err) {
    console.log(err);
  }
};

// @Route   GET /api//books/create
// @descr   Get Add Book Page
// @access  Private
const addBookPage = async (req, res) => {
  try {
    res.render(createViewPath("books/addBook"), {
      title: "Add Book",
      url: config.get("url"),
      isAdmin: true,
    });
  } catch (err) {
    console.log(err);
  }
};

// @Route   GET /api/books/edit/:id
// @descr   Get Update Book Page
// @access  Private
const updateBookPage = async (req, res) => {
  const oldBook = await Book.findByPk(+req.params.id);
  res.render("books/updateBook", {
    title: "Edit Book",
    url: config.get("url"),
    isAdmin: true,
    book: oldBook,
    id: req.params.id,
  });
};

module.exports = {
  createBook,
  findAllBook,
  findOneBook,
  updateBook,
  deleteBook,
  getAllBooksPage,
  getAllBookTablePage,
  addBookPage,
  updateBookPage,
};
