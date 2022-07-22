const express = require('express')
const router = express.Router()

const { getAllProd, getAllProdStatic } = require('../controllers/products')

router.route('/').get(getAllProd)
router.route('/static').get(getAllProdStatic)

module.exports = router