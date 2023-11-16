let mongoose = require('mongoose');

// Create A Book Model
let bookModel = mongoose.Schema({
    Name: String,
    Author: String,
    Published: String,
    Description: String,
    Price: String
    },
    {
        collection: "Books"
    }
);
module.exports = mongoose.model('Book', bookModel);