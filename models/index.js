const config = require("config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.get("db_name"),
  config.get("db_username"),
  config.get("db_password"),
  {
    dialect: config.get("db_dialect"),
    host: config.get("db_host"),
    port: config.get("db_port"),
    logging: false,
    pool: {
      max: config.get("pool_max"),
      min: config.get("pool_min"),
      acquire: config.get("pool_acquire"),
      idle: config.get("pool_idle"),
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// models <------
db.book = require("./book.model")(sequelize, Sequelize);
db.category = require("./category.model")(sequelize, Sequelize);
db.admin = require("./admin.model")(sequelize, Sequelize);

module.exports = db;
