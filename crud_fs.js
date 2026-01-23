const fs = require('fs');
const path = require('path');

const myCRUD = path.join(__dirname, 'CRUD');
const myPath = `${myCRUD}/crud.txt`;

// create
fs.writeFileSync(myPath, 'Create Read Update Delete');

//read 
// fs.readFile(myPath, 'utf8', (err,file) => {
//     console.log(file)
//     // console.log(file.toString())
// });

// Update
fs.appendFile(myPath, ' in Node JS', (err) => {
    if(!err){
        console.log("Your file is Updated Sussefully!")
    }
});


//Delete
// fs.unlinkSync(myPath);

// Rename
fs.rename(myPath, `${myCRUD}/renameCrud.txt`, (err) => {
    if(!err){
        console.log("Your file is Renamed Sussefully!")
    }
});