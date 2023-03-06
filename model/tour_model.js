const mongoose = require("mongoose");

const tour_schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "tour must have name"],
        trim: true
    },

    rating: {
        type: Number,
        default: 1.0
       
    },
    duration: {
        type: Number,
        require: [true, "a tour must have duration"]
    },
    maxGroupSize: {
        type: Number,
        require: [true, "a tour must have MAximum number of group"]

    },
    difficulty: {
        type: String,
        require: [true, "a tour must have MAximum number of group"]
    },
    ratingsAverage: {
        type: Number,
       
    },
    ratingQuantity:{
        type:Number,
        default:0

    },
    description: {
        type: String,
        trim: true,


    },
    coverImg: {
        type: String,
        require: true,
        trim: true
    },
    dateOfCreation: {
        type: Date,
        default: Date.now(),
        select:false

    },
    imges: [String],


    price: {
        type: Number,
        required: [true, 'Price is must for tour'],

    },
    priceDiscount: {
        type: Number
    },
    summary: {
        type: String,
        trim: true,
        require: [true, "A tour must have Summary"]
    },
    startDates: [Date],




});
const Tour = mongoose.model("Tour", tour_schema);


module.exports = Tour 