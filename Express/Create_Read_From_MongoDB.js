const express = require('express');

const Employee = require('./models/EmployeeModel');
const connectDB = require('./db/dbConnection');

const app = express();

connectDB();

const addEmployee = async () => {
    await Employee.create({
        name: "Vini",
        email: "Vini@gmail.com",
        position: "Software Engineer",
        department: "IT"
    })
}

addEmployee();

const getEmployes = async () => {
    const employees = await Employee.find();
    console.log(employees)
}

getEmployes();

app.listen(1000, () => {
    console.log("")
})