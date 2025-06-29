const {Router} = require('express');
const auth = require('../middlewares/middleware');
const { createMember, getAllMembers, deleteMember, updateMember, getMember }=require("../controllers/InternationalController.js");
const InternationalCommitteeRouter=Router();

InternationalCommitteeRouter
.post('/createMember',auth,createMember)
.get('/getAllMembers',getAllMembers)
.delete('/deleteMember/:id',auth,deleteMember)
.put('/updateMember/:id',auth,updateMember)
.get('/getMember/:id',getMember)

module.exports=InternationalCommitteeRouter;