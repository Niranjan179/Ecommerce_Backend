//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import cartApi
const cartApi = require('../apis/cartApis')
//fetch all records
router.get("/fetch",cartApi.fetch_cart)
//insert a product in cart
router.post("/insert",cartApi.insert_cart)
// //update a record
router.put("/update",cartApi.update_cart)
// //delete a record
router.delete("/delete",cartApi.delete_cart)
//export router
module.exports = router