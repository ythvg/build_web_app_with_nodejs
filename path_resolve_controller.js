/**
 * 路径解析 控制器
 */

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    const paths = pathname.split('/');
    const controller = paths[1];
    const action = paths[2];
    const args = paths.slice(3);
    if (handles[controller] && handles[controller][action]) {
        handles[controller][action].apply(null, [req, res].concat(args));
    } else {
        res.writeHead(500);
        res.end('找不到响应控制器');
    }
});

const handles = {
    index: {
        index: function(req, res, foo, bar) {
            res.writeHead(200);
            res.end(`args: ${foo}, ${bar}`);
        }
    }
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
