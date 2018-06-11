/**
 * 请求方法
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'POST':
            update(req, res);
            break;
        case 'DELETE':
            remove(req, res);
            break;
        case 'PUT':
            create(req, res);
            break;
        case 'GET':
        default:
            get(req, res);
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
