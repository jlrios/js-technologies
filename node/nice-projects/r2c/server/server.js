import express from 'express'
import cors from 'cors'
import r2c from './api/r2c.route.js'
import batch from '../api/routes/batch.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/r2c', r2c)
app.use('/api/v1/r2c', batch)

app.use('*', (req, res) => {
    res.status(404).json({
        error: "Not found."
    })
})

export default app