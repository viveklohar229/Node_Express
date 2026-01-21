console.log("Node JS Core modules")  // Global core modules

// const myFile  = require('fs');
const myFile  = require('fs').writeFileSync;


// Non-Global core module (local)

// myFile.writeFileSync("coreModedule.txt", "Here is tutorial for node.js")
myFile("coreModeduleFunction.txt", "Here is tutorial for node.js from function")  


// External Core modules 
// Who will install from npm is known as external core modules like express and so on 