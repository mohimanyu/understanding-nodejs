const express = require("express");

const app = express();

const hostname = "127.0.0.1";
const port = 3000;

app.use((req, res, next) => {
    console.log("home middleware");
    next();
});

app.use("/users", (req, res) => {
    console.log("user middleware");
    res.send("<h1>Hello from user middleware</h1>");
});

app.use("/", (req, res) => {
    console.log("second middleware");
    res.send("<h1>Hello from second middleware</h1>");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
