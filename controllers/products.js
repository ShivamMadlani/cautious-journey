const Product = require('../model/product')

const getAllProdStatic = async (req, res) => {
    const products = await Product.find({})
    res.status(200).json({ products })
}

const getAllProd = async (req, res) => {
    const { featured, company, name } = req.query
    const queryObj = {}
    if (featured) {
        queryObj.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObj.company = company
    }
    if (name) {
        queryObj.name = { $regex: name, $options: 'i' }
    }
    const products = await Product.find(queryObj)
    res.status(200).json({ products })
}


module.exports = { getAllProd, getAllProdStatic }