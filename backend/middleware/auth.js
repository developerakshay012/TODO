import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
        try {
            const token = req.cookies.token;
            console.log("TOKEN:", token);

            if (!token) {
                return res.status(401).json({
                    success: false,
                    message: "Token not found"
                });
            }

            const decode = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            console.log("DECODE:", decode);

        req.userId = decode.userId;
        req.role = decode.role;

        next();

        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Invalid or expired token",
                error: error.message
            });
        }
    };

export const isAdmin = (req ,res , next) => {

    console.log("ROLE:", req.role);
    
    if(req.role !== 'admin'){
        return res.status(403).json({
            success:false,
            message:"only for admin access..."
        })
    }

    next()

}