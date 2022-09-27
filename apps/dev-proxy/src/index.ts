import httpProxy from 'http-proxy';
import http from 'http'

const proxy = httpProxy.createProxyServer({});

const server = http.createServer(function (req, res) {
  const {url} = req

  if (url === '/') {
    proxy.web(req, res, {target: 'http://127.0.0.1:3001'});
    return
  }

  if (url?.startsWith('/seo')) {
    proxy.web(req, res, {target: 'http://127.0.0.1:3002'});
    return
  }

  if (url?.startsWith('/s')) {
    proxy.web(req, res, {target: 'http://127.0.0.1:3003'});
    return
  }

  if (url?.startsWith('/c')) {
    proxy.web(req, res, {target: 'http://127.0.0.1:3004'});
    return
  }

  proxy.web(req, res, {target: 'http://127.0.0.1:3005'});
});

console.log("listening on port 3000")
server.listen(3000);



