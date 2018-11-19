'use strict'

const express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 3000,
    publicDir = express.static(`${__dirname}/public`);

app
    .use(publicDir)
    .get('/', (req, res) => res.sendFile(`${publicDir}/index.html`));

    http.listen(port, () => console.log('Iniciando Express con Socket.IO en localhost:%d', port));

io.on('connection', (socket) => {    
    //- mensaje nuevo usuario
    socket.broadcast.emit('new user', { message: 'Ha entrado un neuvo usuario al chat'});

    socket.on('new message', message => io.emit('user says', message));

    //- en caso que se desconecte
    socket.on('disconnect', () => {
        socket.broadcast.emit('bye bye user', {message: 'Ha salido un usuario del Chat'});
    })
});