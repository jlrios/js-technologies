import inquirer from "inquirer";
import 'colors'

const menuOpts = [
    {
        type: 'list',
        loop: false,
        name: 'option',
        message: 'Seleccione opción',
        // choices: ['Sol', new inquirer.Separator(), 'Mercurio']
        choices: [
            {
                value: '1',
                name: '1. Sol'
            },
            {
                value: '2',
                name: '2. Mercurio'
            },
            {
                value: '3',
                name: '3. Venus'
            },
            {
                value: '4',
                name: '4. Tierra'
            },
            {
                value: '5',
                name: '5. Marte'
            },
            {
                value: '6',
                name: '6. Júpiter'
            },
            {
                value: '7',
                name: '7. Saturno'
            },
            {
                value: '8',
                name: '8. Urano'
            },
            {
                value: '9',
                name: '9. Neptuno'
            },
            {
                value: '10',
                name: '10. Salir'
            }
        ]
    }
]

const showMenu = async() => {
    console.clear()
    console.log('= = = = = = = = = = = = = = =')
    console.log('El Sistema Solar')
    console.log('- - - - - - - - - - - - - - -')

    const { option } = await inquirer.prompt(menuOpts)

    return option
}

export const pause = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ '[ENTER]'.red } para continuar...`
        }
    ]

    console.log('\n')

    await inquirer.prompt(question)
}

export default showMenu