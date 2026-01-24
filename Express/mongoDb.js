const express = require('express');
const connectDb = require('./db/dbConnection')
const user = require('./models/userModel');
const app = express();

connectDb();

const addUser = async () => {
    await user.create({
        name: "Vini",
        email: "Vini@gmail.com"
    })
}

addUser();

app.listen(1000)

