# node-calculadora-yargs
Spanish project: Aplicacion de consola con Node. Usa paquetes y manejo de archivos para importar .txt con los resultados.

1. npm install (instalará Yargs, core del proyecto y Colors.js para la un poco de estética)
2. Recibe por paramentro en consola el numero del que quieres obtener sus multiplos, y el limite de la cantidad de resultados.
3. **Opcionalmente** puedes indicar por parametros en consola si deseas visualizar en la propia consola el resultado.
4. Creará un archivo .txt en el directorio /resultados.

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Show this number's multiples                [number] [required]
  -l, --listar   Show result in console               [boolean] [default: false]
  -h, --hasta    Maximun amount of results                [number] [default: 10]
```
Muchas gracias por leer.
