const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");

const router = express.Router();

const data = [];

// /admin/add-product => get
router.get("/add-product", (req, res) => {
    // res.send(`
    //     <h1>In the 'Add Product' Page</h1>
    //     <form action="/admin/add-product" method="POST">
    //         <input type="text" name="title" />
    //         <button type="submit">Submit</button>
    //     </form>
    // `);
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/add-product",
        productCSS: true,
    });
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
    data.push({ title: req.body.title });
    res.redirect("/");
});

exports.router = router;
exports.adminData = data;
