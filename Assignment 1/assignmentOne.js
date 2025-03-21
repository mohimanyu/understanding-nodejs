const assignmentOne = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write(`
            <html>
                <body>
                    <h1>Welcome to my Assignment</h1>
                    <form action="/create-user" method="POST">
                        <input type="text" name="username" />
                        <button>Send</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }

    if (url === "/create-user" && method === "POST") {
        const body = [];

        req.on("data", (chunks) => {
            body.push(chunks);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split("=")[1];
            console.log(user);
        });
    }

    if (url === "/users") {
        res.write(`
            <html>
                <body>
                    <ol>
                        <li>Tom</li>
                        <li>Jack</li>
                        <li>John</li>
                        <li>Henry</li>
                        <li>Mathew</li>
                    </ol>
                </body>
            </html>
        `);
        return res.end();
    }
};

module.exports = assignmentOne;
