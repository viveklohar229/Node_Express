const express = require('express');
const connectDB = require('./db/dbConnection');
const Employee = require('./models/EmployeeModel');

const app = express();
connectDB()
app.use(express.json());

app.post('/employee', async (req,res) =>{
    try {
        const { name, email, position, department} = req.body;

        const newEmployee = new Employee({
            name,
            email,
            position, 
            department
        })

        const employee = await newEmployee.save();
        res.json(employee);
    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error")
    }
})

app.listen(1000)