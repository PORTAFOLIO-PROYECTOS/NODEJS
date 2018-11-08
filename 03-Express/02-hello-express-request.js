'use strict';

const express = require('express'),
    app = express();

app
    .get('/', (req, res) => res.end('<h1>Hola mundo desde Express.js</h1>'))
    
    //- http://localhost:3000/user/3-hugo-23
    .get('/user/:id-:name-:age', (req, res) => {
        res.end(`
            <h1>
                ${req.params.name}, bienvenido a Express :) tu id es <b>${req.params.id}</b> y tienes ${req.params.age} años
            </h1>
        `);
    })

    .get('/search', (req, res) => {
        res.end(`
            <h1>
                Biendo a Express, los resultados de tu b&uacute;squeda son:
                <mark>${req.query.s}</mark>
            </h1>
        `);
    })
    .listen(3000, () => console.log('Iniciando Express en el puesto 3000'));