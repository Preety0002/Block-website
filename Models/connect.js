
const mongoose = require("mongoose")

exports.connectionDB = ()=>{
    try {
        mongoose.connect("mongodb://0.0.0.0/passport")
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
        
    }
}
