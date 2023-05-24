const mongoose = require('mongoose')
const validator = require('validator')


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is already exist."],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    },
    phone:{
        type:Number,
        unique:true,
        minlength:10,
        maxlength:10,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

// create model

const Students = new mongoose.model('student', studentSchema)

module.exports = Students;












