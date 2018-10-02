'use strict';

module.exports.renderLoginPage = async (req, res, next) => {
    req.model.viewName = 'index';
    next();
}