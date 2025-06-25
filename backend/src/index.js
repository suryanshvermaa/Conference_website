const express=require("express")
const app=express()
const db=require("./database/dbconn")
const cors=require("cors")
const dotenv=require("dotenv")
const clc=require("cli-color")
const router = require("./routes")
dotenv.config();

app.use(cors({origin:["https://icnari26.nasl.in","https://conference-website-three.vercel.app","http://localhost:5173"]}))
app.use(express.json())
app.use("/",router)

const PORT=process.env.PORT
db().then(
    app.listen(PORT,()=>{
        console.log(clc.bgGreen.whiteBright(`server connection  successfull on port:${PORT} 😍😍`))
    })
).catch((err)=>{
    console.log(clc.bgRed.whiteBright("error while starting server 😒😒"))
})