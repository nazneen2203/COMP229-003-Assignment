let mongoose = require('mongoose');

// Create a model class
let businessModel = mongoose.Schema(
    {
        name: String,
        number: Number,
        email: String
    },
    {
        collection: "lists"
    }
);

module.exports = mongoose.model('Busines', businessModel);