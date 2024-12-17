const projects = require('../Models/projectSchema')

exports.addprojectAPI=async(req,res)=>{
    console.log("Inside add projectAPI");

    const {title,language,github,website,overview}=req.body
    const projectImg = req.file.filename
    const userId = req.payload
    console.log(projectImg);

    console.log(title,language,github,website,overview);
    
    

    try{
        console.log("Inside Try");
        
         const project = await projects.findOne({github})
         if(project){
            res.status(401).json("projects already existing")
         }
         else{
            const newProject = new projects({title,language,github,website,overview,projectImg,userId})
            await newProject.save()
            res.status(200).json(newProject)
         }
    }
    catch(err){
        res.status(406).json("Error",err)
    }
    
}

exports.getHomeProject=async(req,res)=>{
    try{
        const response = await projects.find().limit(3)
        res.status(200).json(response)
      }
      catch(err){
       res.status(406).json(err)
      }
}

exports.getUserProject=async(req,res)=>{
    const userId = req.payload
    try{
        const response = await projects.find({userId})
        res.status(200).json(response)
      }
      catch(err){
       res.status(406).json(err)
      }
}

exports.getAllUserProject=async(req,res)=>{
    try{
        const response = await projects.find()
        res.status(200).json(response)
      }
      catch(err){
       res.status(406).json(err)
      }
} 

exports.editprojectAPI=async(req,res)=>{
    console.log("Inside edit projectAPI");

    const {title,language,github,website,overview}=req.body
    const updateImg = req.file? req.file.filename: projectImg //from multermiddlewear
    const userId = req.payload //from jwt middleware
    const {projectId} =req.params
    console.log(updateImg);

    console.log(title,language,github,website,overview,userId);
    
    

    try{
        console.log("Inside Try");
        
         const project = await projects.findByIdAndUpdate({_id:projectId},
            {
                title:title,
                language:language,
                github:github,
                website:website,
                overview:overview,
                projectImg:updateImg,
            }
         )
        await project.save()
            res.status(200).json("project updated...")
         }
         
    
    catch(err){
        res.status(406).json(err)
    }
    
}