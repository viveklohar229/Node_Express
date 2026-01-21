const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type' : 'text/html'})
//     res.write("<h1>Node js from server</h1>");
//     res.write("<h2>Node js from server</h2>");
//     res.write("<h3>Node js from server</h3>");
//     res.write("<h4>Node js from server</h4>");
//     res.write("<h5>Node js from server</h5>");
//     res.write("<h6>Node js from server</h6>");
//     res.end();
// }).listen(1000);

const sayHello = (req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html'})
    res.write("<h1>Node Hello</h1>");
    res.end();
}

http.createServer(sayHello).listen(1000);