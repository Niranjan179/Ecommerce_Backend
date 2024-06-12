//import product schema
const product = require('../model/product')
//get all products
const products_all = async (req,res) => {
    try{
        const products = await product.find()
        console.log('Data sent')
        res.json(products)
    }
    catch(error){
        console.log('Fetch error :- ',error)
        res.json({ 'message': error })
    }
}
module.exports={
    products_all
}