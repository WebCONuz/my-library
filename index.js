const config = require("config");
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/index.routes");
const exHbs = require("express-handlebars");
const { sequelize } = require("./models");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// express-handlebars
const hbs = exHbs.create({
  defaultLayout: "main",
  extname: "hbs",
});
// hbs.handlebars.registerHelper("ifEqual", function (arg1, arg2, options) {
//   return (arg1 = arg2 ? options.fn(this) : options.inverse(this));
// });
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "views")));

// routes
app.use("/", routes);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");

    // Listen to project
    const Port = config.get("port") || 4000;
    app.listen(Port, () => {
      console.log(`Loyiha ${Port}-portda ishga tushdi`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

//   run project
start();
