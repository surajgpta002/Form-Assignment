const mongoose = require("mongoose")

exports.connectDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Form")
    console.log("DataBase Connected");
        
    } catch (error) {
        console.log(error.message);
        
    }
    
}