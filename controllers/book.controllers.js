const db = require("../models");
const Book = db.book;
const Op = db.Sequelize.Op;

// @Route   POST /api/books/add
// @descr   Add new book to DB
// @access  Prived
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

    res.send(201, { message: "Book is created successfully", data });
  } catch (err) {
    res.send(500, { message: err.message });
  }
};

// @Route   GET /api/books
// @descr   Get all books
// @access  Public
const findAllBook = async (req, res) => {
  try {
    const data = await Book.findAll();
    res.send(200, { message: "Request is finished successfully", data });
  } catch (err) {
    res.send(500, { message: err.message });
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

    res.send(200, { message: "Request is finished successfully", data });
  } catch (err) {
    res.send(500, { message: err.message });
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

    res.send(200, { message: "Book is updated successfully", data });
  } catch (err) {
    res.send(500, { message: err.message });
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

    res.send(200, { message: "Request is finished successfully", data });
  } catch (err) {
    res.send(500, { message: err.message });
  }
};

module.exports = {
  createBook,
  findAllBook,
  findOneBook,
  updateBook,
  deleteBook,
};
