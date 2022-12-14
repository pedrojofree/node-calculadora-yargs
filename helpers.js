const fs = require ('fs');
const colors = require('colors');
const argv = require('./yargs');

const crearArchivo = async ( base, listar, hasta ) => {

    if (isNaN(base) || base <= 1 || hasta > 100) return

    try {   
        let salida = "";
        let resConsola = "";
        
        for (let i = 1; i <= hasta; i++) {
            resConsola += `${ base } ${'x'.green} ${ i } ${'='.green} ${ base * i } \n`;
            salida += `${ base } x ${ i } = ${ base * i } \n`;
        }
        
        if (listar) {
            console.log(argv);
            console.log("#####################".rainbow);
            console.log("     Tabla del", base );
            console.log("#####################".rainbow);
            console.log(resConsola);
        }


        fs.writeFileSync(`./resultados/tabla-${base}.txt`, salida)
        
        return (`tabla-${ base }.txt`);

    } catch (error) {
        throw error
    }
    
}
module.exports = crearArchivo;