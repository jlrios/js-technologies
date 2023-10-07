//console.log("Hello World!");

const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Routes.
app.get('/', (req, res) => {
    res.send('Hello World.')
})

app.listen(3000, () => {
    console.log('Server running on port: 3000...')
})

mongoose
    .connect('mongodb+srv://jlrd75:h074Cr4y07A$@proteusf10.obohxnd.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB...')
    }).catch((error) => {
        console.log(error)
    })