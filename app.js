const express = require('express')
const app = express()

const productsRouter = require('./api/routes/products')
const ordersRouter = require('./api/routes/orders')
const morgan = require('morgan')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

// app.use((req,res) => {
//     res.status(200).json({
//         msg:"This is a simple GET request"
//     })
// })

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(morgan("dev"))

mongoose.connect(process.env.mongoConnection)

app.use('/products', productsRouter)
app.use('/orders', ordersRouter)


module.exports = app
