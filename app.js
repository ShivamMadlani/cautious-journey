const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect')

const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1>')
})

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