const os = require('os')
const fs = require('fs')
const http = require('http')

const logger = require('./logger')

let message = 'Hello World!'
let totalMem = os.totalmem()
let freeMen = os.freemem()

console.clear()

const files = fs.readdirSync('./')

// Método preferido al readdirSync.
fs.readdir('./', (err, files) => {
    if (err) console.log('Error: ', err)
    else console.log('Files: ', files)
})

// console.log(module)
// console.log(logger)

// En caso de que se haya exportado el módulo
// asignando la función a un nombre, se usa la
// siguiente forma:
// <constante>.<función>
// logger.showLog(message)

// Dado que se exporto solo la función "writeLog(message)",
// se llama con el nombre de la constante, como una función.
logger(message)

// Template String
// ES6 / ES2015 : ECMAScript 6

logger(totalMem)
logger(freeMen)
logger(files)

// http module, very basic server demostration.
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!')
        res.end()
    }

    if (req.url === '/api/message') {
        res.write('END OF LINE.')
        res.end()
    }
})

server.listen(3000, ()=> {
    console.log('Listening on port 3000...')
})
