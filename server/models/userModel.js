const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


userSchema.statics.signup = async function(email, password) {
    if(!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.create({email,password})
    
    return user
}

module.exports = mongoose.model('User' ,userSchema)