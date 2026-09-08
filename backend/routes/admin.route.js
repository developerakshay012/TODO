import express from 'express'
import { deleteUser, getAllTodos, getAllUser } from '../controllers/admin.controller.js'
import { authMiddleware, isAdmin } from '../middleware/auth.js'

const adminRoute = express.Router()

adminRoute.get('/getUsers' , authMiddleware,isAdmin,  getAllUser)
adminRoute.get('/getTodos' ,  authMiddleware,isAdmin, getAllTodos);
adminRoute.delete('/deleteUser/:id' ,  authMiddleware,isAdmin , deleteUser)

export default adminRoute