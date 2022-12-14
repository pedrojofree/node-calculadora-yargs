const crearArchivo = require('./helpers');
const argv = require('./yargs');
const colors = require('colors');

console.clear()

crearArchivo( argv.b, argv.l, argv.h ) 
    .then ( nombreArchivo => {
        console.log(`Archivo ${nombreArchivo.rainbow} creado`)
        return
    })
    .catch ( error => {
        console.log("Archivo no creado:".red, 'El parametro -b o --base es obligatorio y debe ser mayor a 1.\n'.underline, error);
        return
    });

