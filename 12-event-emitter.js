'use strict';

const EventEmitter = require('events').EventEmitter,
    ee = new EventEmitter();

ee
    .on('myevent', message => console.log(message))
    .once('myevent', message => console.log(`Se emite la primera vez: ${message}`));

ee.emit('myevent', 'soy un emisor de eventos');
ee.emit('myevent', 'volviendo a emitir');
ee.removeAllListeners('myevent'); // para eliminar eventos
ee.emit('myevent', 'volviendo a emitir por tercera vez');