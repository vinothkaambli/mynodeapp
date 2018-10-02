var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    passport = require('passport');

module.exports = function authenticate (config) {
    var app = require('express')();

    app.once('mount', function onmount(parent) {
        // Remove sacrificial express app
        parent._router.stack.pop();

        passport.use(new GoogleStrategy({
            clientID: config.CONSUMER_KEY,
            clientSecret: config.CONSUMER_SECRET,
            callbackURL: config.callbackURL
        }, function(token, tokenSecret, profile, cb) {
            return cb(null, profile);
        }));

        passport.serializeUser(function (user, done) {
            done(null, JSON.stringify(user));
        });
        passport.deserializeUser(function (serializedUser, done) {
            done(null, JSON.parse(serializedUser));
        });

        parent.use(passport.initialize());
        parent.use(passport.session());

    });
    return app;
}