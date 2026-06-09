

//mongoose is an object data modeling framework

const mongoose = require('mongoose')

const uri = process.env.MONGO_URI;

async function connectDB() {


    try {
        await mongoose.connect(uri);
        console.log("✅ Mongoose successfully connected to MongoDB Atlas!")
    }catch(err){
        console.log("❌ Mongoose connection error:",err);
        process.exit(1)//stop the node js application
    }
}



module.exports = connectDB