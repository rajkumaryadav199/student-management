const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    Course_ID:{
        type:Number,
        required:true
    },
     Course_Name:{
        type:String,
        required:true
    },
     Course_Description:{
        type: String,
        required: true
    },
     Course_Credits:{
        type: String,
        required: true
     }



});

module.exports = mongoose.model('Course', courseSchema);