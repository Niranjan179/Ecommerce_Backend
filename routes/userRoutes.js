//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const userApi = require('../apis/userApis')
//insert a record
router.post("/insert",userApi.insert_user)
router.post("/login",userApi.login_user)
//export router
module.exports = router