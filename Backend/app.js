import { createServer } from 'node:http';
import fs from 'fs';

const server = createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Enter Message</title></head><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>');
  return res.end();
  }
  if (url === '/message' && req.method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.writeHead(302, { Location: '/' });
    return res.end();
  }

  
});

server.listen(3000);
console.log('Server running on http://localhost:3000');