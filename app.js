// Import required modules
const fs = require('fs');
//changes system files
const path = require('path');
//looks through paths
const http = require('http');
// makes a http server

// Step 4: Read a File using Filesystem and Path Modules
const filePath = path.join(__dirname, 'example.txt');
// file path will take the dir name = example.txt
let fileData = '';
// empty string nothing in the file so far
fs.readFile(filePath, 'utf8', (err, data) => {
    // utf8 
  if (err) throw err;
  fileData = data;
  console.log('File read successfully:', data);
});

// Step 5: Create an HTTP Server and REST API using HTTP Module
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`HTTP Server says: ${fileData}`);
        //if url is home / then it will read example.txt
  } else if (req.url === '/api/users') {
    const users = JSON.stringify([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]);
    // if the url is /api/users then give the json file with the id and names
    res.writeHead(200, { 'Content-Type': 'application/json' });
    //if 200 aka succesful then content head is application/json
    res.end(users); 
    // returns const users 
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found');
    //    res.end('Not Found'); returning not found
    /// else 404 or err then content is text.plain
  }
});

server.listen(3000, () => {
  console.log('HTTP Server and REST API running on port 3000');
});
// server listens to port 3000 and rust the console log
// Step 6: Arrow Function Example
const add = (a, b) => a + b;
console.log('Arrow Function Example:', add(5, 3));

// Step 7: Node Features - Destructuring
const user = { name: 'Alice', age: 25 };
const { name, age } = user;
console.log(`Destructuring Example: ${name}, ${age}`);
