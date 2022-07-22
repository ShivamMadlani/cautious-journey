const getAllProd = async (req, res) => {
    res.status(200).json({ msg: 'products testing' })
}

const getAllProdStatic = async (req, res) => {
    res.status(200).json({ msg: 'products testing(static)' })
}

module.exports = { getAllProd, getAllProdStatic }