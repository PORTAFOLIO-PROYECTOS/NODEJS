/**
 * 
 * Módulo (require/exports)
 *      require(<paquete o ruta>)
 *          Importar módulos (paquetes, otros ficheros)
 *          Garantía: una única vez
 *          Devuelve el módulo
 * 
 *      exports.propiedaPublica = <valor>
 *          El otro lado del mecanismo
 *          Se pude exportar cualquier valor
 * 
 */

 'use strict';

 const Clock = require('./Clock'),
    myData = require('./my-data'),
    cucu = new Clock();

console.log(myData.name, myData.email, myData._phone);

cucu.theTime();