const path = require("path");

const createViewPath = (page) => {
  return path.resolve(__dirname, "../views", `${page}.hbs`);
};

// const errorHandler = (res, error) => {
//   res.status(500).send({ message: `Xatolik: ${error.message}` });
// };

module.exports = {
  createViewPath,
  //   errorHandler,
};
