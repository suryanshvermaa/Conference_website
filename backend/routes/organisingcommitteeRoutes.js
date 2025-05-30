const {Router} = require('express');
const { createMember,getAllMembers,deleteMember }=require("../controllers/organisingmembercontroller");
const auth = require('../middlewares/middleware');
const organisingCommitteeRouter=Router();

organisingCommitteeRouter
.post('/createMember',auth,createMember)
.get('/getAllMembers',getAllMembers)
.delete('/deleteMember/:id',auth,deleteMember)

module.exports=organisingCommitteeRouter;