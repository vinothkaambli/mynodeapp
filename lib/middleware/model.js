'use strict';

/**
 * Initialize the model object on the request. Add any data that should be added
 * to the model regaurdless of the page being rendered.
 */
module.exports = () => {
    return (req, res, next) => {
        req.model = {
            _csrf: res.locals._csrf
        };

        next();
    };
};
