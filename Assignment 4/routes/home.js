const express = require("express");

const router = express.Router();

const data = [];

router.get("/", (req, res) => {
    res.render("home", { pageTitle: "Home", path: "/" });
});

router.post("/users", (req, res) => {
    data.push(req.body.username);
    res.redirect("/users");
});

exports.router = router;
exports.usernames = data;
