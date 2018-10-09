/*

Buffers
    Una tira de bytes (datos binarios)
    Similar a un arrar de enteros
    Tamaño fijo
    Maniplar datos directamente
        Sockets
        Implementar protocolos complejos
        Manipulación de ficheros/imágenes
        Criptografía

*/

'use strict';

let buf = new Buffer(26);

console.log(buf, buf.length, buf.toString());

for (let i = 0; i < buf.length; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString());