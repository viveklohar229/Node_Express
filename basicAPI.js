const http = require('http');
const data = require('./emptyData');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Tyep' : 'application\json'});
    // res.write(JSON.stringify({'name' : 'Vini' , 'dep' : 'IT'}))
    res.write(JSON.stringify(data))
}).listen(1000)
