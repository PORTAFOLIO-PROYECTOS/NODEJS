'use strict';

const http = require('http');

function webServer(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<h1>Hola node.js en la web</h1>');
}

http
    .createServer(webServer)
    .listen(3000, 'localhost', () => console.log('Servidor corriendo en http://localhost:3000/'));