const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String,
    },
    linkedIn:{
        type:String,
    },
    profilePic:{
        type:String,
    },

})

//3 Model creation //extract same as mongodb collection
const users = mongoose.model('users',userShema)
module.exports=users