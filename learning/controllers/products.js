const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/add-product",
        productCSS: true,
    });
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    // products.push({ title: req.body.title });
    res.redirect("/");
};

exports.getProducts = (req, res) => {
    // const products = Product.fetchAll();
    Product.fetchAll((products) => {
        res.render("shop", {
            hasProds: products.length > 0,
            prods: products,
            pageTitle: "Shop",
            path: "/shop",
            shopCSS: true,
        });
    });
};
