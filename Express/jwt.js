const express = require('express');
const jwt = require('jsonwebtoken')
const app = express() 

const secretKey = 'Vini123654'

app.post('/login', async (req, res) =>{
    const user ={
        name: "Vini",
        email : "Vini@gmail.com"
    };
    const token = jwt.sign( { user}, secretKey, {expiresIn : "500s"} );
    res.json({token})
})

const verifyToken = (req,res,next) =>{
    const bearerHeader = req.headers['authorization'];
    if(bearerHeader){
        const token = bearerHeader.split(" ")[1];
        req.token = token;
        next()
    }else{
        res.status(403).json({result : "Token is not valid"});
    }
}

app.post('/protected', verifyToken, async (req,res) =>{
jwt.verify(req.token, secretKey, (err, authData) => {
    if(err){
        res.status(403).json({result : "Unauthorized User"});
    }else{
        res.json({
            msg: "You are an authorized user",
            authData
        })
    }
})
})

app.listen(1000)