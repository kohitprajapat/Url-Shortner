import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import crypto from "crypto";
const PORT = 4005;
const PUBLIC_DIR = path.resolve("public");

const server = createServer(async (req, res) => {
    if (req.method === "GET") {
        let filePath = "";
        let contentType = "";

        // Determine file path and content type
        if (req.url === "/") {
            filePath = path.join(PUBLIC_DIR, "index.html");
            contentType = "text/html";
        } else if (req.url === "/style.css") {
            filePath = path.join(PUBLIC_DIR, "style.css");
            contentType = "text/css";
        } else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Page Not Found</h1>");
            return;
        }

        try {
            // Serve the requested file
            const data = await readFile(filePath);
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
        } catch (error) {
            // Handle errors while reading the file
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Page Not Found</h1>");
        }
    } else {
        // Handle unsupported HTTP methods
        res.writeHead(405, { "Content-Type": "text/html" });
        res.end("<h1>405 Method Not Allowed</h1>");
    }

    if(req.method==="POST" && req.url==="/shorten"){
        const body = "";
        req.on("data", (chunk)=>{
            body += chunk;
        });
        req.on("end", ()=>{
            console.log(body);
            const {url, shortCode} = JSON.parse(body);

            if(!url){
                res.writeHead(400, {"Content-Type": "text/plain"});
                return res.end("Url is required!!!");
            }

            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
