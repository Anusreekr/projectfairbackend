//project-fair-backend creation

//1.Load .env file
require('dotenv').config()//Loads .env file contents into process.env by default.


//2. import express
const express = require('express')

//6.import cors
const cors = require('cors')

//8.import db
const db=require('./DB/connection')

const router = require('./Routes/router')


//3.create an application using express
const projectFairServer = express()

//7.Middlewear configuration
projectFairServer.use(cors())
projectFairServer.use(express.json())
projectFairServer.use(router)

projectFairServer.use('/uploads',express.static('./uploads'))

//4. Port creation
const PORT = 3000 || process.env.PORT

//5. server run
projectFairServer.listen(PORT,()=>{
    console.log("Server running on the port" +PORT);
    
})

projectFairServer.get('/',(req,res)=>{
    res.send("Welcome to projectFairServer")
})
