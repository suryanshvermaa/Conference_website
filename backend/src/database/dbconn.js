const dotenv=require("dotenv");
const clc=require("cli-color")
const mongoose=require("mongoose")
dotenv.config();
const URI=process.env.URI

const db=async()=>{
    try{
        await mongoose.connect(URI)
        console.log(clc.bgGreen.whiteBright(" connection with database successfull 😍😍"))
    }catch(err){
        console.log(err)
        console.log(clc.bgRed.whiteBright("error while connection with database 😒😒"))
    }
}

module.exports=db
