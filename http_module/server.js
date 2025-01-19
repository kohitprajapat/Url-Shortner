const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h2>This is Home Page</h2>");
        res.end();
    }

    if(req.url === "/source-code") {
        res.write("This is Source Code Page");
        res.end();
    }else {
        res.write("Error 404 Page not Found");
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});

server.emit(3000);