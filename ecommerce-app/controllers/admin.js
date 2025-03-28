const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId, (product) => {
        if (!product) {
            return res.redirect("/");
        }
        res.render("admin/edit-product", {
            product: product,
            pageTitle: "Edit Product",
            path: "/admin/admin-products",
        });
    });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("admin/products", {
            prods: products,
            pageTitle: "Admin Products",
            path: "admin/products",
        });
    });
};
