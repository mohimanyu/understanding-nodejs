const http = require("http");
const assignmentOne = require("../Assignment 1/assignmentOne");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    assignmentOne(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
