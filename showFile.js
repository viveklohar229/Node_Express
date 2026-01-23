const fs = require('fs');

const path = require('path');

const myFolder = path.join(__dirname, 'myfolder');

for(let i = 0; i < 3; i++){
    fs.writeFileSync(`${myFolder}/show ${i}`, `This file have some contents according file number ${i}`)
}

fs.readdir(myFolder, (err, items) => {
    // console.log(items)
    items.forEach((file) => {
        console.log(file);
    })
})
