const express = require('express')

const Employee = require('./models/EmployeeModel')
const ConnectDB = require('./db/dbConnection')

ConnectDB()
const app = express()


app.delete('/employees/:id' , async (req,res) =>{
    try{
        const employeeId = req.params.id;
        const deleteEmployee = await Employee.findByIdAndDelete(employeeId);

        if(!deleteEmployee){
            return res.status(404).send("Employee Not Found")
        }
        res.json(deleteEmployee)
    }catch (err){
        console.log(err)
    }
})

app.listen(1000)