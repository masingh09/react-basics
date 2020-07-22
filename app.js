// using HTTP module with callback function in createServer

const http = require('http');

// create a server
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Say say say hello!!');
//         res.end();
//     };
//     if (req.url === '/numbers') {
//         console.log('2');
//         res.write(JSON.stringify([1,2,3,4,5,6,7]));
//         res.end();
//     };      
// });

// emit the event if a new req or connection is active at port 3000
// server.listen(8080);

// create a new server
http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Try to hello world');
        res.end();
    };

    // extending request with different routes
    if (req.url === '/api/numbers') {
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    };
}).listen(8080); // emit the event if a new req or connection is active at port 8080



console.log('Active port is 8080....');

