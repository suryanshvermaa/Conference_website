const {Router} = require('express');
const { createMember,getAllMembers,deleteMember, updateMember, getMember, setPriority }=require("../controllers/organisingmembercontroller");
const auth = require('../middlewares/middleware');
const organisingCommitteeRouter=Router();

organisingCommitteeRouter
.post('/createMember',auth,createMember)
.get('/getAllMembers',getAllMembers)
.delete('/deleteMember/:id',auth,deleteMember)
.put('/updateMember/:id',auth,updateMember)
.get('/getMember/:id',getMember)
.patch('/setPriority/:id',auth,setPriority);

module.exports=organisingCommitteeRouter;