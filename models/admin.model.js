module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admin", {
    full_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return Admin;
};
