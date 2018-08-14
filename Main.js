
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => 
{
  res.end('server');
});

server.listen(3000);
