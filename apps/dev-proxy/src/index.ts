import express, {Request} from 'express';
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const routes = {
    '^/$': 'http://localhost:3001',
    '/seo': 'http://localhost:3002',
    '/s': 'http://localhost:3003',
    '/c': 'http://localhost:3004',
    '.*': 'http://localhost:3005',
} as const

app.use(
  '*',
  createProxyMiddleware({
    router: (req: Request)  => {
        for (let route of Object.keys(routes)) {
            const r = new RegExp(route)
            if (req.url.match(r)) {
                return (routes as any)[route]
            }
        }
    },
    changeOrigin: true,
  })
);

app.listen(3000);




