const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");
const prodData = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
    // console.log("shop", prodData.adminData);
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
    res.render("shop", {
        hasProds: prodData.adminData.length > 0,
        prods: prodData.adminData,
        pageTitle: "Shop",
        path: "/shop",
        shopCSS: true,
    });
});

module.exports = router;
