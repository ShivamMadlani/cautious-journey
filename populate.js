require('dotenv').config()

const connectDb = require('./db/connect')
const product = require('./model/product')
const jsonProd = require('./product.json')

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        await product.deleteMany()
        await product.create(jsonProd)
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()