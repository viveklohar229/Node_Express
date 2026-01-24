const reqSalary = (req,res,next) => {
    const salary = req.query.salary;
    if(!salary){
        res.send("No salary is provided");
    }
    else if(salary < 50000){
        res.send("Your salary is below than 50000")
    }
    else{
        next()
    }
}

module.exports = reqSalary;