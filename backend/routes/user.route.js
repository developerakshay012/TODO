import express from 'express'
import { login, logout, signup } from '../controllers/user.controller.js';

const authRoutes = express.Router();

authRoutes.post('/signup' , signup)
authRoutes.post('/login' , login);
authRoutes.delete('/logout', logout)


export default authRoutes