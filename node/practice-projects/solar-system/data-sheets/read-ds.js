import * as fs from 'fs'

export const readDataSheet = (sheet) => {
    if (!fs.existsSync(sheet)) {
        return null
    } 

    const info = fs.readFileSync(sheet, { encoding: 'utf-8' })

    return info
}