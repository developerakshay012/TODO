import express from 'express'

import { createTodo , deleteTodo, getTodo, updateTodo } from '../controllers/todo.controller.js'
import {authMiddleware} from '../middleware/auth.js';

const todoRoutes = express.Router();

todoRoutes.post('/create' , authMiddleware, createTodo);
todoRoutes.put('/update/:id' , authMiddleware, updateTodo);
todoRoutes.get('/get/:id' , authMiddleware, getTodo);
todoRoutes.delete('/delete/:id' , authMiddleware, deleteTodo);


export default todoRoutes