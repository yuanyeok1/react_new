const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/dev',
        createProxyMiddleware({
            target: 'http://yuetk.mcpoker.net',
            ws: false,
            changeOrigin: true,
            pathRewrite: {
                '^/dev' : ''
            }
        })
    );

    app.use(
        '/sso',
        createProxyMiddleware({
            target: 'http://yuetk.mcpoker.net',
            ws: false,
            changeOrigin: true
        })
    );
};