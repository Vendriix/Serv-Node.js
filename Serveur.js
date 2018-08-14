//Tuesday, Aug 14th
//By Vendrix 
//Node.js

const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => 
{
  res.end('server');
});

server.listen(3000);
