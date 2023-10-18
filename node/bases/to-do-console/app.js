import 'colors'

import showMenu, { pause } from './menu/menu.js'

const main = async() => {
    let opt = ''

    do {
        opt = await showMenu()
        await pause()
    } while(opt !== '7')
}

main().catch(console.error)