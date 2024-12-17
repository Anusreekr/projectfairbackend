const mongoose = require('mongoose')

const projectShema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    projectImg:{
        type:String,
        required:true
    },
    userId:{
        type:String,
    }

})

//3 Model creation //extract same as mongodb collection
const projects = mongoose.model('projects',projectShema)
module.exports=projects