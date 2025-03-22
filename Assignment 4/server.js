const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const homeRoute = require("./routes/home");
const usersRoute = require("./routes/users");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/users", usersRoute);
app.use(homeRoute.router);

app.listen(3000);
