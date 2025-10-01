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
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk)
      
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);

    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();

  }
  
});

server.listen(3000);
console.log('Server running on http://localhost:3000');