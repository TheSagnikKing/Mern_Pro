const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    role: {
        type: String,
        default: "Barber"
    },
    name:{
        type:String,
    },
    mobileNumber:{
        type:String
    },
    gender:{
        type:String
    },
    profile:[
        {
        public_id:{
          type:String
        },
        url:{
          type:String,
        }
      }
    ]
})

module.exports = mongoose.model('BarberUser', userSchema)