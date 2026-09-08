import User from '../model/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup = async(req ,res) => {

   try {

     const {firstName , lastName , email , password ,role} = req.body;

    if( !firstName || !lastName || !email || !password){
        return res.status(401).json({
            success:false,
            message:"all the fields are reqiured"
        })
    }

    //exist user
    const existUser = await User.findOne({email})
    if(existUser){
        return res.status(400).json({
            success:false,
            message:"User already exist"
        })
    }

    //password length cheaking must be 8 
    if(password < 8){
        return res.status(400).json({
            success:false,
            message:"password length must be 8 character"
        })
    }

    // hasing the password
    const hashPassword = await bcrypt.hash(password , 10);

    //create the user in the database 

    const user = await User.create({
        firstName,
        lastName,
        email,
        password:hashPassword,
        role
    })

    return res.status(200).json({
        success:true,
        message:"user register successfully...",
        user:{
            id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            role:user.role
        }
    })
    
   } catch (error) {
        return res.status(500).json({
            success:false,
            message:"error while register the user",
            error:error.message
        })
   }


}

export const login = async (req,res) => {

 try {
    
       const {email , password} = req.body;

       //cheak the fields
       if(!email || !password){
        return res.status(401).json({
            success:false,
            message:"please filed the required fields"
        })
       }

       //if user not exist in the database
       const user = await User.findOne({email})
       if(!user){
        return res.status(400).json({
            success:false,
            message:"user not exist in the database please signup"
        })
       }

       //compare password 

       const isMatch = await bcrypt.compare(password, user.password)

       //compare the password to the actual password 
       if(!isMatch){
        return res.status(404).json({
            success:false,
            message:"password is not matching with actual password"
        })
       }

       const token  = jwt.sign({

        userId:user._id,
        role:user.role

       },
       process.env.JWT_SECRET,
       {
        expiresIn:'7d'
       }
    );

    res.cookie('token' , token , {
        httpOnly:true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res.status(200).json({
        success:true,
        message:"loggedIn succcessfully..",
        token,
        user
    })

 } catch (error) {
    return res.status(500).json({
        success:false,
        message:"error in while login",
        error:error.message
    })
 } 

}

export const logout = async (req, res) => {
  try {
    // Clear the cookie by resetting its value and setting maxAge to 0
    res.cookie("token", "", { 
      httpOnly: true,
      expires: new Date(0) // Forces immediate expiration
    });

    return res.status(200).json({ 
      success: true, 
      message: "Logged out successfully." 
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: "Server error during logout.", 
      error: error.message 
    });
  }
};