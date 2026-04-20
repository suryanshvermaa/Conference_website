const express=require("express")
const {createContact,getContact}=require("../controllers/contactController");
const auth = require("../middlewares/middleware");
const contactRouter=express.Router();
const middlewares = require("../middlewares/ratelimiter");
const { body } = require('express-validator');

contactRouter
.post("/",middlewares.contactLimiter, [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').notEmpty().withMessage('Message is required'),
    body('phone').optional().isMobilePhone().withMessage('Please provide a valid phone number')
],createContact)
.get('/',auth,getContact)

module.exports=contactRouter