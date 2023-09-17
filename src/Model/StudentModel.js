const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Student_ID:{
        type: Number,
        required: true
    },
    First_Name: {
    type: String,
    required: true
  },
  Last_Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);