const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
     title: {
         type : String,
         required : true,
     },
     author: {
        type : String,
        required : true,
     },
     year : Number,
     price: Number,
});

module.exports = mongoose.model('Book',bookSchema );