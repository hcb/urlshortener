var Url = require("mongoose").model("Url");

exports.render = function(req, res) {
    var shortid = req.url.replace("/", "");

    Url.findOne({
        shortid: shortid
    }, function(err, url) {
        if (err) return console.error(err);
        if (url == null) {
            res.render('redirect', {
                title: 'Invalid Link',
                text: 'This is not a valid link.'
            });
        }
        else if (url.url.length) {
            res.redirect(url.url);
        } else {
            res.render('redirect', {
                title: 'Invalid Link',
                text: 'This is not a valid link.'
            });
        }

    });
};
