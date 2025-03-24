const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");
const prodData = require("./admin");
const productsController = require("../controllers/products");

const router = express.Router();

router.get(
    "/",
    productsController.getProducts
    //     (req, res) => {
    //     // res.sendFile(path.join(rootDir, "views", "shop.html"));
    //     res.render("shop", {
    //         hasProds: prodData.adminData.length > 0,
    //         prods: prodData.adminData,
    //         pageTitle: "Shop",
    //         path: "/shop",
    //         shopCSS: true,
    //     });
    // }
);

module.exports = router;
