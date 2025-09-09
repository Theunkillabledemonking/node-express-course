require('dotenv').config()
require('express-async-errors')

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

// routes

app.get('/', (req, res) => {
    res.send('<h1>store api</h1><a href="/api/v1/products">products route </a>')
})

app.use('/api/v1/products', productsRouter)

// products route
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PROT || 5000;

const start = async () => {
    try {
        // connect db
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()