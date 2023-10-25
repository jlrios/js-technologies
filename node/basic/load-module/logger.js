function writeLog(message) {
    console.log(message)
}

// Exportar con un nombre y asignando la función a ese nombre.
// module.exports.<nombre> = <función>.
// module.exports.showLog = writeLog

// Si solo se va a exportar una función, se puede
// usar la siguiente forma:
// module.exports = <función>
module.exports = writeLog