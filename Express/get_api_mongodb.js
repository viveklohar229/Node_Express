const express = require('express');
const connectDB = require('./db/dbConnection');
const Employee = require('./models/EmployeeModel');

const app = express();
connectDB();

app.get('/employee', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        console.log("Error fetching Data: ", error);
        res.status(500).send("Server Error");
    }
})

app.get('/employee/:id', async (req, res) => {
    try {
        const employees = await Employee.findById(req.params.id);
        if(!employees){
            res.send(404).json({ msg : "Employee not found!"})
        }
        res.json(employees);
    } catch (error) {
        console.log("Error fetching Data: ", error);
        res.status(500).send("Server Error");
    }
})

app.listen(1000);