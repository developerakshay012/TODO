import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const databaseConnection = async () => {
        try {
            
            await mongoose.connect(process.env.MONGODB);
            console.log("database connected successfully...");

        } catch (error) {
            console.log("database connection faliure",error);
            process.exit()
            
            
        } 

}


export default databaseConnection;