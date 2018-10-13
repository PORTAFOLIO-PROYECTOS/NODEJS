'use strict';

const http = require('http').createServer();

function webServer(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<h1>Hola node.js en la web como emisor de eventos</h1>');
}

http
    .on('request', webServer)
    .on('error', err => console.log('ocurrió un error: ', err.message))
    .listen(3000, 'localhost', () => console.log('Servidor corriendo en http://localhost:3000/'));