exports.render = function(req, res) {
    res.render('index', {
        title: 'url shortener',
        csrf: req.csrfToken()
    });
};
