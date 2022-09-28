module.exports = {
  reactStrictMode: true,
  basePath: '/seo'
};

const withTM = require("next-transpile-modules")([
    'ui'
]);

module.exports = withTM({
});
