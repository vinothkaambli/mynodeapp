'use strict';

const controllers = {
        HomeController: require('./home'),
        LoginController: require('./login')
    },
    APIEndPoints = require('../config/api'),
    _ = require('lodash'),
    ServiceResponseHandler = require('../lib/middleware/service-response-handler');

module.exports = (router) => {
    _.each(APIEndPoints, endPoint => {
        const routerArgs = [endPoint.path];
        routerArgs.push((req, res, next) => {
            if (req.originalUrl ==='/home/' || req.isAuthenticated()) {
                next();
            } else {
                if (req.session) {
                    req.session.goingTo = req.url;
                }
                res.redirect();
            }
        });

        routerArgs.push((req, res, next) => {
            if (res.error) {
                next();
            } else {
                controllers[endPoint.controller][endPoint.handler](req, res, next);
            }
        });
        if (endPoint.renderer) {
            routerArgs.push(ServiceResponseHandler[endPoint.renderer]);
        }

        router[endPoint.method.toLowerCase()].apply(router, routerArgs);
    });
};