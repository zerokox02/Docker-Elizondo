const http = require('http');

function suma(a, b) {
  return a + b;
}

if (require.main === module) {
  http.createServer((req, res) => {
    res.end('¡Hola desde Docker!');
  }).listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
}

module.exports = { suma };
