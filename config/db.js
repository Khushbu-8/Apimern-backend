const mongoose = require('mongoose')
require ("dotenv").config();

const connectDB = async() =>{

    try {
        
        const conn = await mongoose.connect(process.env.MONGOURL)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        return false;
        
    }
}
module.exports = connectDB;