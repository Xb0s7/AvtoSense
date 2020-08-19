const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const reviewSchema = new Schema({

    firstName: {
        type:String,
        required: true,
    },

    lastName: {
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    createdOn:{ 
        type: Date, 
        default: Date.now
    },
    review: {
        type: String,
        required: true,
    },
    

});

module.exports = new Model('Review', reviewSchema);