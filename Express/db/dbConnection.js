const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vinita22122_db_user:FFZL28up4z3Ngqf8@cluster0.yqi3f1s.mongodb.net/');
        console.log("MongoDb connected Successfully!");
    } catch (error) {
        console.log("MongoDb connection error",error)
    }
}

module.exports = connectDB; 