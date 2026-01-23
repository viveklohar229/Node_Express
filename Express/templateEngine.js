const express = require('express')
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    const empInfo = 
        {name: "VA", id: '123'}
    
    res.render('Welcome', {empInfo})
})

app.listen(1000, () =>{
    console.log("App is running on port 1000")
})