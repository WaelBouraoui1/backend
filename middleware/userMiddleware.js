const jwt=require('jsonwebtoken')
const userMiddleware=async(req,res,next)=>{
    try {
        const token=req.headers.token
        if(!token){
            res.satus(400).json({msg:"you are not authorized!"})
        }
        else{
            const VrifyToken=await jwt.verify(token,process.env.JWT_KEY)
            console.log(VrifyToken)
            if(!VrifyToken){
                res.satus(400).json({msg:"you are not authorized!"})
            }
        
        else{
            req.body.userId=VrifyToken.id
            next()
        }
    }
    } catch (error) {
        exports.status(500).json({msg:"Something went wrong",error})
    }
}
module.exports=userMiddleware
