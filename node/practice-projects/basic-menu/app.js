require('../to-dos-console/basic-menu/node_modules/colors')

const { showMenu } = require('./helpers/menu')
const { pause } = require('./helpers/menu')

console.clear()

const main = async() => {
    console.log("Hello World!")

    let opt = ''

    do {
        opt = await showMenu()
        console.log({ opt })        
        await pause()
    } while (opt !== '7')
}

main()
showMenu()