var config = require("./config"),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    csrf = require("csurf"),
    express = require('express');

module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(session({
        secret: config.secret
    }));
    app.use(csrf());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(express.static('./public'));

    app.use(function (err, req, res, next) {
        if (err.code !== 'EBADCSRFTOKEN') return next(err)

        // handle CSRF token errors here
        res.status(403)
        res.send('Bad CSRF token. Form has been violated. So violated. ;_;')
    });

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/url.server.routes.js')(app);
    require('../app/routes/redirect.server.routes.js')(app);

    return app;
};
