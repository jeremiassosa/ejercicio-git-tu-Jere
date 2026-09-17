const { createServer } = require('node:http');
const port = 3000;

const server = createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Inicio\n');
  } else if (req.url === '/alumnos') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Barua, Tobi y Gio\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('No encontrado\n');
  }
});

server.listen(port, () => {
  console.log(`${port}`);
});
