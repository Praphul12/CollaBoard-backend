const mongoose = require('mongoose');
require("dotenv").config();


const connectionString = process.env.MONGO_URI;


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const connectToDb = async()=>{
    try {
        await mongoose.connect(connectionString,connectionParams);
        // console.log("Connected to Db");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDb;