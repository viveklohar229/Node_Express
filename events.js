// Built In event listeners 

// const fs = require('fs');

// const myRead = fs.createReadStream('./inout.txt');
// myRead.on('open', () => {
//     console.log("Your  file is readed successfully!");
// })

// Customize event listeners 

const event = require('events');

const eventEmitter = new event.EventEmitter();

eventEmitter.on('play', (type) => {
    console.log(`I'm Playing ${type}`)
})

eventEmitter.emit('play', 'cricket');