'use strict';

const fs = require('fs');

/*let promise = new Promise((resolve, reject) => {
    fs.readFile('archivo.txt', (error, content) => {
        return (error) ? reject(new Error('E archivo no se pudo leer')) : resolve(content);
    });
});*/
// cualquiera de los funciona igual ↓ ↑
let promise = new Promise(function (resolve, reject){
    fs.readFile('archivo.txt', function(error, content){
        return error ? reject(new Error('error, no se pueod abrir el archivo')) : resolve(content);
    })
});

console.log('\nAbriendo Archivo...');

promise
    .then(promiseData => console.log(promiseData.toString()))
    .catch(error => console.log(error.message));

console.log('\nHaciendo otra cosa');