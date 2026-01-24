const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vinita22122:vinita22122@cluster0.ovarrnl.mongodb.net/');
        console.log("MongoDb connected Successfully!");
    } catch (error) {
        console.log("MongoDb connection error",error)
    }
}

module.exports = connectDB;