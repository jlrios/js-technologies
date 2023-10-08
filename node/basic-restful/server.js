//console.log("Hello World!");

const express = require('express')
const mongoose = require('mongoose')
const app = express()

//const Product = require('./models/productModel')

app.use(express.json)

// Routes.
app.get('/', (req, res) => {
    res.send('Hello World.')
})

app.listen(3000, () => {
    console.log('Server running on port: 3000...')
})

// Product routes.
/* app.post('/product', async(req, res) => {
    console.log('Enter /product route.')
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch(error) {
        console.log(error.message)
        res.status(500).json({
            message: error.message
        })
    }
    res.send(req.body)
})*/

/*mongoose
    .connect('mongodb+srv://jlrd75:h074Cr4y07A$@proteusf10.obohxnd.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB...')
    }).catch((error) => {
        console.log(error)
    })*/