const express = require('express');

const Employee = require('./models/EmployeeModel')
const ConnectDB = require('./db/dbConnection')

const app = express();

app.use(express.json());
ConnectDB()

app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        console.log("Error fetching Data: ", error);
        res.status(500).send("Server Error");
    }
})

app.patch('/employees/:id', async (req, res) => {
    try {
        const employeeId = req.params.id;
        const updatedData = req.body;

        const updatedEmployee = await Employee.findByIdAndUpdate(
            employeeId,
            { $set: updatedData },
            { new: true, }
        )

        if (!updatedEmployee) {
            return res.status(404).json({ msg: "Employee Not Found" });
        }
        res.json(updatedEmployee)
    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500).json("Server Error")
    }
})

app.listen(1000)