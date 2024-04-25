


const Task = require('../models/taskModel')


const CreateTask=async(req,res) =>{
    try {
        const {title, desc, userId}=req.body
         const newTask = await Task.create({ title, desc, owner: userId })
         res.status(200).json({ msg: "User Created", newTask })
    } catch(error) {
       res.status(500).json({msg:"Something went wrong",error})
    }
}

const DeleteTask=async(req,res) =>{
    try {
        const taskDeleted=await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"User Deleted",taskDeleted})
    } catch(error) {
       res.status(500).json({msg:"Something went wrong",error})
    }
}

const GetTasks=async(req,res) =>{
    try {
        const Tasks=await Task.find({owner:req.body.userId})
        res.status(200).json({msg:"Get all user Tasks",Tasks})
    } catch(error) {
       res.status(500).json({msg:"Something went wrong",error})
    }
}

const UpdateTasks=async(req,res) =>{
    try {
        const UpdateTask=await Tasks.findByIdAndUpdate(req.params.x,req.body,{new:true})
        res.status(200).json({msg:"Update User Task",UpdateTask})
    } catch(error) {
       res.status(500).json({msg:"Something went wrong",error})
    }
}



module.exports = { CreateTask,DeleteTask,GetTasks,UpdateTasks}

////test postman mch mafhoum register ma tlaach put
