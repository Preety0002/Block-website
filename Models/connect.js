
const mongoose = require("mongoose")

exports.connectionDB = ()=>{
    try {
        mongoose.connect("mongodb+srv://arjuprity0002:123preetyy@cluster0.fsls1py.mongodb.net/onetoonechat?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
        
    }
}
