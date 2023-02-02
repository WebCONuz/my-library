const config = require("config");
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/index.routes");
const { engine } = require("express-handlebars");
const { sequelize } = require("./models");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));

// express-handlebars
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", ".hbs");

// routes
app.use("/api", routes);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");

    // Listen to project
    const Port = config.get("port") || 5000;
    app.listen(Port, () => {
      console.log(`Loyiha ${Port}-portda ishga tushdi`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

//   run project
start();
