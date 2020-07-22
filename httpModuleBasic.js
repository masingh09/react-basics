// using HTTP module

const http = require('http');

// create a new server
const server = http.createServer();

// event handler for connection event
server.on('connection', (socket) => {
    console.log('New coonection at prot 3000');
});

// emit the connection event if a new req or connection is active at port 3000
server.listen(3000);
console.log('Active port is 3000....');