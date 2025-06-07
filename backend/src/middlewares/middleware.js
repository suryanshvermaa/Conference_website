const dotenv=require("dotenv");
dotenv.config();
const jwt=require("jsonwebtoken");
const cli=require("cli-color");
const secret=process.env.secret;

/**
 * 
 * @description Middleware to authenticate user requests using JWT.
 * @param {import("express").Request} req
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
const auth=async (req,res,next)=>{
    try{
        const token=req.headers.token;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        
        const user=jwt.verify(token,secret);
        req.user=user.user;
        next();
    }catch(err){
        console.log(cli.red.bgBlack(err));
        return res.status(401).json({ message: "authorization invalid" });
    }
}

module.exports=auth;