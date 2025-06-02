const {Router} = require('express');
const { createMember,getAllMembers,deleteMember, updateMember }=require("../controllers/organisingmembercontroller");
const auth = require('../middlewares/middleware');
const organisingCommitteeRouter=Router();

organisingCommitteeRouter
.post('/createMember',auth,createMember)
.get('/getAllMembers',getAllMembers)
.delete('/deleteMember/:id',auth,deleteMember)
.put('/updateMember/:id',auth,updateMember)

module.exports=organisingCommitteeRouter;