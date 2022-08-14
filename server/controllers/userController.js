const User = require('../models/userModel')

const loginUser = async(req,res)=>res.status(200).json({msg: 'login!'})

const signupUser = async(req,res) => {
    const { email, password } = req.body
    try{
        const user = await User.signup(email,password)
        console.log('worked')
        res.status(200).json({email,user})
    } catch(error) {
        console.log('error')
        res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser }