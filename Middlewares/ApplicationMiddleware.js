const ApplicationMiddleware=(req,res,next)=>{
    console.log("Inside Application Middleware")
    next();
}

module.exports=ApplicationMiddleware