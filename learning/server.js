// const http = require("http");
// const routes = require("./routes");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

// custom routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// app.engine(
//     "hbs",
//     expressHbs({
//         layoutsDir: "views/layouts",
//         defaultLayout: "main-layout.hbs",
//         extname: "hbs",
//     })
// );

app.set("view engine", "ejs");
// app.set("view engine", "hbs");
// app.set("view engine", "pug");
app.set("views", "views");

const hostname = "127.0.0.1";
const port = 3000;

// helps to parse the incoming response data
app.use(bodyParser.urlencoded({ extended: false }));

// adding custom css from public folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.router);
app.use(shopRoutes);

// app.use("/", (req, res) => {
//     console.log("In another middleware");
//     res.send("<h1>Hello from Express</h1>");
// });

// handles all unknown paths
app.use((req, res) => {
    // res.status(404).sendFile(
    //     path.join(__dirname, "views", "page-not-found.html")
    // );

    res.render("404", { pageTitle: "404" });
});

// const server = http.createServer(app);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
