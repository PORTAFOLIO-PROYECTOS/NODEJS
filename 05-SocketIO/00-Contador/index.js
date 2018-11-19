/**
 * Socket.IO
 *      - Eventos connection y disconnect
 *      - Puedes crear tus propios eventos
 *      - emit(): cuando se comunica un mensaje a todos los clientes conectados
 *      - broadcast.emit(): cuando se comunica un mensaje a todos los clientes, exepto al que lo irigina
 *      - Los 4 puntos anteriores funcionan en el servidor y en el cliente 
 */

'use stict';

const http = require('http').createServer(server),
    fs = require('fs'),
    io = require('socket.io')(http);

let conexions = 0;

function server(req, res) {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, {
                'Content-Type': 'text/html'
            });
            return res.end('<h1>Error interno del servidor</h1>');
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            return res.end(data, 'utf-8');
        }
    })
}

http.listen(3000, () => console.log('Servidor corriendo desde localhost:3000'));

io.on('connection', (socket) => {
    socket.emit('hello', {
        message: 'Hola mundo con socket.IO'
    });

    socket.on('Otro evento que me inventé', data => console.log(data));
});