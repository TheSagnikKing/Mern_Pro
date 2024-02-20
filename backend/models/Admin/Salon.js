const mongoose = require('mongoose')

const salonSchema = new mongoose.Schema({
    adminEmail:{
        type: String,
        required:true
    },
    salonName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    services:{
        type:[String],
        required: true
    }
})

module.exports = mongoose.model('Salon', salonSchema)