module.exports.html =  (req, res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.set('Pragma', 'no-cache');
    res.render(req.model.viewName, req.model.data);
};
module.exports.json =  (req, res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.set('Pragma', 'no-cache');
    res.json(req.model);
};
module.exports.redirect =  (req, res) => {
    req.session.save(() => {
        res.redirect(req.model.redirectURL);
    });
};
