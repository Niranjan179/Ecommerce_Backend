//import express module
const express = require ('express')
// import router
const router = express.Router()
//import productApi
const productApi = require('../apis/productApis')
//fetch all records
router.get("/fetch",productApi.products_all)
//export router
module.exports = router