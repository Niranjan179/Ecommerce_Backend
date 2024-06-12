//import modules
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
//import url
let url = require('./url')
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding json
app.use(bodyparser.urlencoded({ extended:false }))
//enable cors
app.use(cors())
//connect to mongodb
mongoose.connect(url,{dbName : "minprj"})
.then(()=>{
    console.log('Connection success')
},(errRes)=>{
    console.log('Connection failed :- ',errRes)
})
//import routes
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
//use routes
app.use("/user",userRoutes)
app.use("/product",productRoutes)
app.use("/cart",cartRoutes)
//create port
let port = 8080
//assign port no
app.listen(port,()=>{
    console.log('Server listening port no ',port)
})