/**
 * 查询字符串
 */

const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    req.query = url.parse(req.url, true).query;
    handle(req, res);
});

function handle(req, res) {
    res.end(`your query is ${JSON.stringify(req.query)}`)
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
