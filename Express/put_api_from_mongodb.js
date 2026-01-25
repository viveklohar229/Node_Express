const express = require('express')
const Employee = require('./models/EmployeeModel')
const ConnectDB = require('./db/dbConnection')

const app = express();
app.use(express.json())

ConnectDB();


app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        console.log("Error fetching Data: ", error);
        res.status(500).send("Server Error");
    }
})

app.put('/employees/:id', async (req, res) => {
    try {
        const employeeId = req.params.id;
        const { name, email, position, department } = req.body;
        const upadatedEmployee = await Employee.findByIdAndUpdate(
            employeeId,
            { name, email, position, department },
            { new: true }
        )

        if (!upadatedEmployee) {
            res.status(404).json({ msg: "Employee not found" })
        }
        res.json(upadatedEmployee)


    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500).send("Server Error")
    }

})


app.listen(1000)