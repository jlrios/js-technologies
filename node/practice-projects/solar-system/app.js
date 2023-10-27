import 'colors'
import showMenu, { pause } from './menu/menu.js'

const main = async() => {
    let option = ''

    do {
        option = await showMenu()
        
        console.log({ option })

        switch(option) {
            case '4':
                console.log('Earth.') 
                break
        }

        await pause()
    } while(option !== '10')
}

main().catch(console.error)