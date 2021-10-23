const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const db = require("./db");
dotenv.config();
const path = require("path");

const PORT = process.env.PORT;
const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("screens/main.pug");
});

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START`);
});
