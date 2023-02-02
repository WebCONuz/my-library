module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    category: {
      type: Sequelize.STRING,
    },
  });

  return Category;
};
