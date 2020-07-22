// using OS module
const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`total memory : ${totalMem}`);
console.log(`free memory : ${freeMem}`)
