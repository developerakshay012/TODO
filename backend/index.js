import express from 'express'
import dotenv from 'dotenv'
import connectDatabase from './config/database.js'
import authRoutes from './routes/user.route.js'
import cookieParser from "cookie-parser";
import todoRoutes from './routes/todo.route.js';
import adminRoute from './routes/admin.route.js';


dotenv.config()

const app = express()

const PORT = process.env.PORT || 4001 

app.use(express.json())
app.use(cookieParser());


app.use('/api/v1/auth' , authRoutes)
app.use('/api/v1/todo' , todoRoutes)
app.use('/api/v1/admin' , adminRoute)



connectDatabase()

app.get('/' , (req,res) => {
    res.send("welcome to the homepage")
})

app.listen(PORT , () => {
    console.log(`server is running on the ${PORT}....`);
})



