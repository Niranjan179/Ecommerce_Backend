//import userschema
let token = require('../Login/token')
const User = require('../model/user')
//insert a user
const insert_user = async (req,res) => {
    const user = new User({
        u_id : req.body.u_id,
        u_name : req.body.u_name,
        u_pwd : req.body.u_pwd,
        u_u_email : req.body.u_u_email,
        u_addr : req.body.u_addr,
        u_u_contact : req.body.u_u_contact
    })
    try {
        const savedUser = await user.save()
        console.log('User Created')
        res.send(savedUser)
    }
    catch(error){
        res.status(400).send(error)
    }
}
//login a user
const login_user = async (req,res) => {
    let u_name = req.body.u_name
    let u_pwd = req.body.u_pwd
    try{
        console.log(u_name, u_pwd)
        //accessing user name and password
        const user = await User.find({ u_name:u_name })
        console.log(user) 
        if(user.length>0){
            if(user[0].u_pwd==u_pwd){
                console.log("Authorization success")
                let myToken = token({ u_name : u_name , u_pwd : u_pwd},new Date().toString())
                res.send({'auth':'success', token : myToken})
            }
            else{
                console.log("Authorization failed")
                res.json({ 'auth': 'failed'})
            }
        }
        else{
            console.log("Authorization failed")
            res.json({'auth':'failed'})
        }
    }
    catch(err){
        res.status(400).send(err);
    }
}
module.exports = {
    insert_user,
    login_user
}