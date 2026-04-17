const express=require("express")
const {createContact,getContact}=require("../controllers/contactController");
const auth = require("../middlewares/middleware");
const contactRouter=express.Router();
const middlewares = require("../middlewares/ratelimiter");

contactRouter
.post("/",middlewares.contactLimiter,createContact)
.get('/',auth,getContact)

module.exports=contactRouter