'use strict';

const http = require('http'),
    options = {
        host: 'ed.team',
        port: 80,
        path: '/cursos'
    };

let htmlCode = '';

function httpClient(res) {
    console.log(`El sitio ${options.host} ha respondido. Código de estado: ${res.statusCode}`);
    res.on('data', data => {
        htmlCode += data;
        console.log(data, data.toString());
    })
}

function httpError(err){
    console.log(`El sitio ${options.host} no respondió. Código de estado: ${err.code}. Error: ${err.message}`);
}

function webServer(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(htmlCode);
}

//Instancia cliente HTTP
http
    .get(options, httpClient)
    .on('error', httpError);

//Instancia servidor HTTP
http
    .createServer(webServer)
    .listen(3000, 'localhost', () => console.log('Servidor corriendo en http://localhost:3000/'));
