const express = require('express');

const app = express();

app.get('/', (req,res) => {
    const name = req.query.name;
    if(name) {
        res.send(`Welcome ${name}`);
    }else{
        res.send("Routing Parameters in Express JS");
    }
})

app.listen(1000);