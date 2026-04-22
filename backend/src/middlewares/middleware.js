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
       let token

       if(req.headers.token){
        token = req.headers.token
        // res.json({message :"         header_token  :      " +token}) >> //just for checkout
       }
       else if(req.headers.authorization){
        const auth_Header = req.headers.authorization

        if(auth_Header.startsWith("Bearer ")){
            token = auth_Header.split(" ")[1]
            // res.json({message :"     authorization_token            "   +token}) >>  //just for checkout
            
        }

       }

      

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