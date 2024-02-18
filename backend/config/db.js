const mongoose = require("mongoose")

const CONNECTDB_URI = "mongodb+srv://completeAuth123:completeAuth123@cluster0.8s87z6t.mongodb.net/mernpro"

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(CONNECTDB_URI)

        console.log(`MongoDb is successfully connected on host:${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = connectDB