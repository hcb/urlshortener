module.exports = function(app) {
    var redirect = require('../controllers/redirect.server.controller');
    app.get(/[A-Za-z0-9]{6}/, redirect.render);
};
