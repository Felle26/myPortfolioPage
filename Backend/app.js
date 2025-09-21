import { createServer } from 'node:http';
import fs from 'fs';

const server = createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message">');
    res.write('<button type="submit">Send</button></form></body></html>');
  return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.deleteSync('message.txt');
    fs.writeFileSync('message.txt', 'DUMMY Test');
    res.writeHead(302, { Location: '/' });
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    return res.end();
  }

  
});

server.listen(3000);
console.log('Server running on http://localhost:3000');