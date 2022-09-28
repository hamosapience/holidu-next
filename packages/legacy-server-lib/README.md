```ts
// *********************
// Sentry monitoring
// *********************

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(
  Sentry.Handlers.requestHandler({
    user: false, // default: true = ['id', 'username', 'email'], set explicitly by `setUser`
    ip: true,
  }),
)

await viteDevServer(app)

// *********************
// First responders
// *********************

// Respond to health requests
// Chore: Shuffle middlewares to avoid garbage health/readiness-check logs in kibana
health(app)

// Assets middleware
assetsMiddleware(app)

// When we proxy requests to /assets before we have told express
// where and what assets are, those requests get thrown out with 403.
// By having the proxy middleware after the assets one, we are fixing the issue
// Enable proxy, should be added before any parsers
proxy(app)

// respond directly to known error paths
filter404s(app)

// Remove trailing slashes
slashes(app, false)

// *********************
// Header manipulators
// *********************

// Add the correct headers
// github.com/helmetjs/helmet/wiki/Helmet-4-upgrade-guide#there-is-now-a-default-policy
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
)
app.use(nocache())

// Enable certain CORS-equests
customCORS(app)

// normalize headers
headers(app)

// set the request id
requestId(app)

// *********************
// Monitoring middleware
// *********************

// set start time for logging
apm(app)

if (isTest === false) {
  // Log messages
  log(app)
}

// Enable proxy, should be added before any parsers
prometheus(app)

// *********************
// Parsers
// *********************

// Read body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.json({ type: 'application/csp-report' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  }),
)

// Read cookies
app.use(cookieParser())

// *********************
// Data middleware, adds relevant data to res
// *********************

// cookie data
cookieData(app)

// authentication data
jwtDataRouteHandler(app)

// fetch user data
userData(app)

// *********************
// Needs data middleware, but doesn't respond
// *********************

// rate limiting
rateLimiter(app)

// Monitoring browserfamiles etc.
monitoring(app)

// Check host
host(app)

// Set cookies based on collected data and query params
queryCookies(app)

// *********************
// Response middleware
// *********************

// Known redirects, needs body parser
redirect(app)

// Responds to robots.txt, needs userData
robots(app)

// Social login etc
auth(app)

// Mailers
mailers(app)

// *********************
// SSR middleware
// *********************

setSentryContext(app)

// fetch routeValidation and save in res
routeValidation(app)
```
