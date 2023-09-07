const http = require('http');
//imports http
const server = http.createServer((req, res) => {
    // req = request, res = response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // 200 = found 
  res.end('Welcome to Fitness jokes');
  // gives the user only what they want or 404 no more
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on <http://localhost>:${PORT}`);
});
