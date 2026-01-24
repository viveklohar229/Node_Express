const express = require('express');
const reqSalary = require("./middleware/middleware")
const app = express();

const route = express.Router();
route.use(reqSalary);
// Single routes 
// app.get('/', reqSalary, (req, res) => {
//     res.send("This is your Home Page")
// })

// Group routes 
app.get('/',  (req, res) => {
    res.send("This is your Home Page")
})

route.get('/about', (req, res) => {
    res.send("This is your About Page")
})

route.get('/contact', (req, res) => {
    res.send("This is your Contact Page")
})

app.use('/', route)

app.listen(1000)