var url = require("../../app/controllers/url.server.controller")

module.exports = function(app) {
    app.route("/url/create").post(url.create, function(err) {
        console.log("An error has occured?");
    });
};
