const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        // required: true
    },
    role: {
        type: String,
        default: "Admin"
    },
    name:{
        type:String,
    },
    mobileNumber:{
        type:String
    },
    gender:{
        type:String
    }
})

module.exports = mongoose.model('AdminUser', userSchema)