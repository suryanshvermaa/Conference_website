const express=require("express")
const {createContact,getContact}=require("../controllers/contactController");
const auth = require("../middlewares/middleware");
const contactRouter=express.Router();
const middlewares = require("../middlewares/ratelimiter");
const { body } = require('express-validator');

contactRouter
.post("/",middlewares.contactLimiter, [
    body('name').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('subject').isLength({ min: 5 }).withMessage('Subject must be at least 5 characters'),
    body('message').isLength({ min: 20 }).withMessage('Message must be at least 20 characters'),
    body('phone').optional().isMobilePhone().withMessage('Please provide a valid phone number')
],createContact)
.get('/',auth,getContact)

module.exports=contactRouter