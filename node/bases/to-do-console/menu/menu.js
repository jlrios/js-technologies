import inquirer  from 'inquirer'
import 'colors'

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Finalizar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '7',
                name: '7. Salir'
            }
        ]
    }
]

const showMenu = async() => {
    console.clear()
    console.log('= = = = = = = = = = = = = = =')
    console.log('   Mis tareas'.white)
    console.log('- - - - - - - - - - - - - - -')

    const { option } = await inquirer.prompt(menuOpts)

    return option
}

export const pause = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.red } para continuar...`
        }
    ]

    console.log('\n')

    await inquirer.prompt(question)
}

export default showMenu