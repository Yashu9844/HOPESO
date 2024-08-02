import { errorHandler } from "./error";
import jwt from 'jsonwebtoken';


export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(errorHandler(401,"Token Not Found"));
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return next(errorHandler(401,'User not verified'));
        }
        req.user = user;
        next();
    })
    
    
}