// const colors = require('colors');

//################## APLICACIONES DE CONSOLA CON YARGS Y NODE ##############

const argv = require('yargs')
    .options('b', { //CAMBIAR LA BASE DE LA TABLA EN CONSOLA
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: "Show this number's multiples"
    })
    .option('l', {  //SI -L ES PASADO, ENTONCES MOSTRAR TODA LA TABLA EN LA CONSOLA
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: "Show result in console"
    })
    .option('h', {  //SI -L ES PASADO, ENTONCES MOSTRAR TODA LA TABLA EN LA CONSOLA
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: "Maximun amount of results"
    })
    .check ( (argv, options) => { //VALIDAR QUE LA BASE SEA UN NUMERO
        if ( isNaN( argv.b )){
            throw 'La base debe ser un numero'.red
        }
        return true //SI NO HAY ERRORES, SIEMPRE RETORNAR TRUE
    })
    .argv;

module.exports = argv;