const express = require('express');

const app = express();


//application level
const reqFilter = (req,res,next) =>{
    const salary = req.query.salary;

    if(!salary){
        res.send("No salalry provided");
    }
    else if(salary < 50000){
        res.send("Your salary is less than 50000")
    }
    else{
        next();
    }
}

app.use(reqFilter)

app.get('/', (req, res) =>{
    res.send("You passed from your middleware")
});

app.get('/about', (req, res) =>{
    res.send("Welcome to about page")
});

app.listen(1000)