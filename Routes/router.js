//1
const express = require('express')

//3 import userControl
const userController = require('../Controllers/userController')
//4 import jwtMiddleware
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
//5 import projectController
const projectController = require('../Controllers/projectController')
const multerMiddleware = require('../Middlewares/MulterMiddleware')

//2 create router
const router = express.Router()



router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)

router.post('/api/addProject',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.addprojectAPI)

router.get('/api/getAllUserProject',jwtMiddleware,projectController.getAllUserProject)

router.get('/api/getUserProject',jwtMiddleware,projectController.getUserProject)

router.get('/api/getHomeproject',projectController.getHomeProject)

router.post('/api/editProject/:projectId',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.editprojectAPI)

module.exports = router