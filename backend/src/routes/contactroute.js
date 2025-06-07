const express=require("express")
const {createContact,getContact}=require("../controllers/contactController");
const auth = require("../middlewares/middleware");
const contactRouter=express.Router();

contactRouter
.post("/",createContact)
.get('/',auth,getContact)

module.exports=contactRouter