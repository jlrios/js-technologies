import app from './server/server.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const r2cs = async function main() {
    dotenv.config({ path: './config/.env' })

    const mongoDBURI = process.env.R2C_DB_URI
    const port = process.env.PORT || 8000

    try {
        await mongoose
            .connect(mongoDBURI)
            .then(() => { 
                console.log("R2C MongoDB connected...")
            })

        app.listen(port, () => {
            console.log(`R2C Server running on port: ${port}...`)
        })
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

r2cs().catch(console.error)