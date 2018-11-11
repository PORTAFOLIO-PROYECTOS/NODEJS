'use strict';

const express = require('express'),
    app = express();

app
    .get('/', (req, res) => {
        //res.end('<h1>Hola mundo desde Express.js</h1>')
        res.send('<h1>Hola mundo desde Express.js</h1>');
    })
    .get('/ed', (req, res) => {
        //- Redirección
        res.redirect(301, 'https://hugorocaproyectos.js.org');
    })
    .get('/json', (req, res) => {
        res.json({
            name: "Hugo",
            age: "23",
            alias: "hugoroca"
        });
    })
    .get('/render', (req, res) => {
        //- No funciona por  que hay que configurar el tipo de views que desplegará express
        res.render(`${__dirname}/index.html`)
    })
    .listen(3000, () => console.log('Iniciando Express en el puesto 3000'));