

'use strict';

var path = require('path'),
    meddleware = require('meddleware'),
    config = JSON.parse(JSON.stringify(require('./config/config.json'))),
    express = require('express'),
    app = express(),
    port = process.env.port || 8000,
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config');

var settings = config.express;
settings.views = path.join(process.cwd(), settings.views);
Object.keys(settings).forEach(function(name) {
    app.set(name, settings[name]);
});
config.middleware.router.module.arguments[0].index = path.join(process.cwd(), config.middleware.router.module.arguments[0].index);
config.middleware.static.module.arguments[0] = path.join(process.cwd(), config.middleware.static.module.arguments[0]);
config.middleware.baseModel.module.name = path.join(process.cwd(), config.middleware.baseModel.module.name);
config.middleware.passport.module.name = path.join(process.cwd(), config.middleware.passport.module.name);

app.use(config.mountpath, meddleware(config.middleware));

// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: webpackConfig.output.publicPath
// }));
app.on('shutdown', function onshutdown(server, timeout) {
    var stop, ok, err, timer;

    stop = function(code) {
        app.emit('stop');
        process.exit(code);
    };
    ok = stop.bind(null, 0);
    err = stop.bind(null, 1);
    server.close(ok);
    clearTimeout(timer);
    timer = setTimeout(err, timeout);
});

app.listen(port, function(err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log('[%s] Listening on http://localhost:%d', app.settings.env.toUpperCase(), port);
    }
});

