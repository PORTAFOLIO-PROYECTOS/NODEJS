// herederas las carasteristicas a mi objetos del reloj
'use strict';

const EventEmitter = require('events').EventEmitter,
    inherit = require('util').inherits;

function Clock() {
    setInterval(()=> this.emit('tictac'), 1000);
}

inherit(Clock, EventEmitter);

Clock.prototype.theTime = function (){
    let date = new Date(),
        hour = date.toLocaleTimeString();

    console.log(hour);
}

let cucu = new Clock();

cucu.on('tictac', () => {
    cucu.theTime();
})
