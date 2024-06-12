//import cart schema
const Cart = require('../model/cart')
//Fetch cart data
const fetch_cart = async (req,res) => {
    let u_name = req.body.u_name
    try {
        const cart = await Cart.find({ u_name : u_name })
        if(cart.length){
            console.log(`cart response for ${cart[0].u_name} sent`)
            res.send(cart)
        }
        else{
            console.log("No products present")
            res.send({'message': "No products in cart"})
        }
    }
    catch(err){
        console.log(err)
    }
}
//Insert product in cart
const insert_cart = async (req,res) => {
    const cart = new Cart({
        p_id : req.body.p_id,
        p_img : req.body.p_img,
        qty : 1,
        p_cost : req.body.p_cost,
        u_name : req.body.u_name
    })
    try{
        const savedCart = await Cart.save()
        console.log('Product inserted into cart')
        res.send(savedCart)
        res.json({ 'cartInsert':'success' })
    }
    catch(error){
        res.status(400).send(error)
    }
}
//Update Product in cart
const update_cart = async (req,res) => {
    let p_id = req.body.p_id
    let u_name = req.body.u_name
    const cart = {
        "qty" : req.body.qty
    }
    try{
        const updateCart = await Cart.updateOne({ p_id:p_id , u_name : u_name},cart)
        if(updateCart.modifiedCount !=0){
            res.json({ 'cartUpdate' : 'Success' })
            console.log(`Cart data for ${u_name} updated`)
        }
        else{
            console.log("Record not updated")
            res.json({ 'cartUpdate' : 'Record not found'})
        }
    }
    catch(err){
        res.json({ 'cartUpdate' : 'error'+ err })
    }
}
//Delete Product in cart
const delete_cart = async (req,res) => {
    const cart = {
        p_id : req.body.p_id
    }
    try{
        const deleteCart = await Cart.deleteOne({p_id:p_id},cart)
        if(deleteCart.deletedCount != 0){
            console.log("Product deleted")
            res.json({ 'CartDelete' : 'Success'})
        }
        else{
            console.log("Cart data not deleted")
            res.json({ 'cartDelete' : 'Record Not found'})
        }
    }
    catch(err){
        res.json({ 'cartDelete' : 'Error' + err})
    }
}
//export router
module.exports = {
    fetch_cart,
    insert_cart,
    update_cart,
    delete_cart
}