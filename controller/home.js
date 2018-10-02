'use strict';

module.exports.renderHomePage = async (req, res, next) => {
    req.model.viewName = 'index';

    next();
}

