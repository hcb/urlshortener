var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UrlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    shortid: {
        type: String,
        unique: true,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true
    },
    dateLastAccessed: Date
});

mongoose.model('Url', UrlSchema);
