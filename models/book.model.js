module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    title: {
      type: Sequelize.STRING,
    },
    author: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    bookImg: {
      type: Sequelize.STRING,
    },
    bookFile: {
      type: Sequelize.STRING,
    },
  });

  return Book;
};
