const express=require("express")

const app=express()
const db=require("../database/dbconn")
const cors=require("cors")
const dotenv=require("dotenv")
const clc=require("cli-color")
dotenv.config();
const PORT=process.env.PORT
const userRoute=require("../routes/userroute")
const photoRoute=require("../routes/photoRoutes")
const speakerRoute=require("../routes/speakerRoutes")
const noticeRoute=require("../routes/noticeRoutes")
const recentupdateRoute=require("../routes/recentUpdateRoutes")
const router = require("../routes/contactroute")
app.use(cors())
app.use(express.json())
app.use("/user",userRoute)
app.use("/photogallery",photoRoute)
app.use("/speaker",speakerRoute) 
app.use("/papers",noticeRoute)
app.use("/recentupdate",recentupdateRoute)
app.use("/contact",router)
db().then(
    app.listen(PORT,()=>{
        console.log(clc.bgGreen.whiteBright(" server connection  successfull 😍😍"))
    })
).catch((err)=>{
    console.log(clc.bgRed.whiteBright("error while starting server 😒😒"))
})