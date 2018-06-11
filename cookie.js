/**
 * Cookie
 */

const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    req.cookies = parseCookie(req.headers.cookie);
    handle(req, res);
});

function parseCookie(cookie) {
    const cookies = {};
    if (!cookie) {
        return cookies;
    }
    const cookieList = cookie.split(';');
    cookieList.forEach(item => {
        const pair = item.split('=');
        cookies[pair[0].trim()] = pair[1].trim();
    });
    return cookies;
}

function serialize(name, val, opt) {
    const pairs = [`${name}=${val}`];
    opt = opt || {};
    if (opt.maxAge) pairs.push(`Max-Age=${opt.maxAge}`)
    return pairs.join(';');
}

function handle(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (!req.cookies.isVisit) {
        res.setHeader('Set-Cookie', serialize('isVisit', '1'));
        res.end('欢迎第一次访问');
    } else {
        res.end('欢迎再次访问');
    }
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
