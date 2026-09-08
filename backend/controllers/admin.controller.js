import User from "../model/User.js";
import Todo from '../model/Todo.js'


export const getAllUser = async(req , res) => {

    try {
        const users = await User.find().select('-password');

        return res.status(200).json({
            success:true,
            message:"we got all the users",
            users
        })

        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"error while find the all users"
        })
    }

}


export const getAllTodos = async(req ,res) => {

    try {
        
        const todos = await Todo.find().
                                populate('user' , 'firstName lastName email')

        if(!todos){
            return res.status(200).json({
                success:false,
                message:"error in finding the todos"
            })
        }

        return res.status(200).json({
            success:true,
            message:"all the todos find successfully...",
            totalTodos:todos.length,
            todos
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'error while getting the all todos',
            error:error.message
        })
    }

}


export const deleteUser = async(req , res) => {

    try {
        
        const user = await User.findByIdAndDelete(req.params.id)
                                          
                            
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user not found"
            })
        }
                                        
        return res.status(200).json({
            success:true,
            message:"user deleted successfully",
            user
        })

    } catch (error) {
        
    }

}