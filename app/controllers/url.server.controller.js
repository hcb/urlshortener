var Url = require("mongoose").model("Url");

exports.create = function(req, res, next) {
    var url = new Url(req.body);
    var shortid = generateShortid();

    url.dateCreated = Date.now();
    url.shortid = shortid;

    url.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(url.shortid);
            console.log("cats");
        }
    });
};

function generateShortid() {
    var alpha = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var l = 6;
    var s = '';

    for (var i = 0; i < l; i++) {
        s += alpha[Math.floor(Math.random() * alpha.length)];
    }

    return s;
}
