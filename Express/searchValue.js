const express = require('express');

const Employee = require('./models/EmployeeModel')
const connectDB = require('./db/dbConnection')

connectDB();

const app = express();

app.get('/search-amp/:value', async (req,res) => {
    try{
        let searchValue = req.params.value;
        let result = await Employee.find({
            "$or" : [
                {'name': {$regex : searchValue, $options: "i"}},
                {'email': {$regex : searchValue, $options: "i"}},
                {'position': {$regex : searchValue, $options: "i"}},
                {'department': {$regex : searchValue, $options: "i"}},
            ]
        })

        res.json(result)
    }catch(err){
        console.log("Something went wrong")
    }
})

app.listen(1000)