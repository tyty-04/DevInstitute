
// 1 - Import Node.js core module
const http = require('http'); 
// 2 - creating server
const server = http.createServer((req, res) => {   
    //handle incoming requests here..
});
//3 - listen for any incoming requests
server.listen(5000); 
console.log('Node.js web server at port 5000 is running..');