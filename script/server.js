const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware =require('webpack-hot-middleware');
const opn = require('opn');
const app = express();
const webpackConfig = require('../config/webpack.dev.js');
const webpackCommonConfig = require('../config/webpack.common.js');
const compiler = webpack(webpackConfig);
const port = 3005;
const autoOpenBrowser = !!true;

const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackCommonConfig.output.publicPath,
    quiet: true
});

const hotMiddleware = webpackHotMiddleware(compiler, {
    log: false,
    heartbeat: port
});

app.use(devMiddleware);

app.use(hotMiddleware);

var _resolve;
var _reject;
var readyPromise = new Promise((resolve, reject) => {
    _resolve = resolve
    _reject = reject
})


var server;
var portfinder = require('portfinder');
portfinder.basePort = port;

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
    portfinder.getPort((err, port) => {
        if (err) {
            _reject(err);
        }
        process.env.PORT = port;
        var uri = 'http://localhost:' + port;
        console.log('> Listening at ' + uri + '\n');
        // when env is testing, don't need open it
        if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
            opn(uri)
        }
        server = app.listen(port);
        _resolve();
    });
});

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}


