import 'colors'
import showMenu, { pause } from './menu/menu.js''

const main = async() => {
    let option = ''

    do {
        option = await showMenu()
        console.log({ option })
        await pause()
    } while(option !== '10')
}

main().catch(console.error)