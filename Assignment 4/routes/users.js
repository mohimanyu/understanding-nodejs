const express = require("express");
const userData = require("./home");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("users", {
        pageTitle: "User",
        path: "/users",
        userList: userData.usernames,
    });
});

module.exports = router;
