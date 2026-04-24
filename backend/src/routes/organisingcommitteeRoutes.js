const {Router} = require('express');
const { createMember,getAllMembers,deleteMember, updateMember, getMember, setPriority }=require("../controllers/organisingmembercontroller");
const auth = require('../middlewares/middleware');
const { body } = require('express-validator');
const organisingCommitteeRouter=Router();

organisingCommitteeRouter
.post('/createMember',auth, [
  body('name').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('specialization').isLength({ min: 3 }).withMessage('Specialization must be at least 3 characters'),
  body('college').isLength({ min: 2 }).withMessage('College must be at least 2 characters'),
  body('description').isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
  body('committee').notEmpty().withMessage('Committee is required'),
],createMember)
.get('/getAllMembers',getAllMembers)
.delete('/deleteMember/:id',auth,deleteMember)
.put('/updateMember/:id',auth,updateMember)
.get('/getMember/:id',getMember)
.patch('/setPriority/:id',auth,setPriority);

module.exports=organisingCommitteeRouter;