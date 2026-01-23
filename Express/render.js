const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <input type="text" placeholder="Enter your name" /> <br/>
        <a href="/contact" >Go to Conatct us Page</a>
        `);
})

app.get('/contact', (req, res) => {
    res.send(`
        <h1>Welcome to Contact Us Page</h1>
        <a href="/about" >Go to About Page</a>
        `);
})

app.get('/about', (req, res) => {
    res.send(`
        <h1>Welcome to About Page</h1>
        <a href="/users" >Go to Users</a>
        `);
})

app.get('/users', (req, res) => {
    res.send([
        {name : "Vini", address: "ABC"},
        {name : "Vivek", address: "DEF"},
        {name : "Vinita", address: "GHI"},
    ]);
    
})

app.listen(1000);