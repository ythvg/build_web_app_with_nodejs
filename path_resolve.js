/**
 * 路径解析
 */

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    fs.readFile(path.join(process.cwd(), pathname), (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('找不到文件...')
        } else {
            res.writeHead(200);
            res.end(data);
        } 
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
