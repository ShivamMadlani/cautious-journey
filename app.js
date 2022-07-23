const express = require('express')
const app = express()

require('dotenv').config()
require('express-async-errors')
const connectDB = require('./db/connect')
const route = require('./routes/products')

const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1>')
})

app.use('/api/v1/products', route)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening to ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()