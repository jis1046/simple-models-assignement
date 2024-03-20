const mongoose = require('mongoose');

let dogModel = {};

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    breed: {
        type: String,
        required: true,
        trim: true,
    },

    age: {
        type: Number,
        required: true,
        min: 0,
    },

    createdDate: {
        type: Date,
        default: Date.now,
      },
});