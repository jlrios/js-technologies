import 'colors'
import showMenu, { pause } from './menu/menu.js'
import { readDataSheet } from './data-sheets/read-ds.js'

const main = async() => {
    let option = ''

    do {
        option = await showMenu()
        
        switch(option) {
            case '4':
                const infoPlanet = readDataSheet('./data-sheets/planets/earth.txt')
                console.log(infoPlanet)
                break
        }

        await pause()
    } while(option !== '10')
}

main().catch(console.error)