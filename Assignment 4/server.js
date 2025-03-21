const express = require("express");
const path = require("path");

const homeRoute = require("./routes/home");
const usersRoute = require("./routes/users");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/users", usersRoute);
app.use(homeRoute);

app.listen(3000);
