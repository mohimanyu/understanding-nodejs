// importing required packages
const express = require("express");
const path = require("path");

// importing required routes
const homeRoute = require("./routes/home");
const usersRoute = require("./routes/users");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// handling navigation
app.use("/", homeRoute);
app.use("/users", usersRoute);

app.listen(3000);
