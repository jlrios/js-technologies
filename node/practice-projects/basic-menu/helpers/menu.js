require('../../to-dos-console/basic-menu/node_modules/colors')

const showMenu = () => {
    return new Promise(resolve => {
        console.clear()
        console.log('= = = = = = = = = = = = = = ='.green)
        console.log('     To-do\'s console app    '.yellow)
        console.log('= = = = = = = = = = = = = = =\n'.green)
    
        console.log(`${ '1.'.cyan } Add task`)
        console.log(`${ '2.'.cyan } List tasks`)
        console.log(`${ '3.'.cyan } List of done tasks`)
        console.log(`${ '4.'.cyan } List of pendding tasks`)
        console.log(`${ '5.'.cyan } Done task(s)`)
        console.log(`${ '6.'.cyan } Delete task`)
        console.log(`${ '7.'.cyan } Exit\n`)
    
        const readLine = require('readline').createInterface({
            input:  process.stdin,
            output: process.stdout
        })
    
        readLine.question('Select option: ', (opt) => {
            readLine.close()
            resolve(opt)
        })
    })
}

const pause = () => {
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input:  process.stdin,
            output: process.stdout
        })
    
        readLine.question(`\nPress ${ 'ENTER'.red } to continue...`, (opt) => {
            readLine.close()
            resolve()
        })
    })
}

module.exports = { 
    showMenu,
    pause
}