const {Router} = require('express');
const userRouter = require('./userroute');
const photoGalleryRouter = require('./photoRoutes');
const speakerRouter = require('./speakerRoutes');
const noticeRouter = require('./noticeRoutes');
const recendUpdatesRouter = require('./recentUpdateRoutes');
const contactRouter = require('./contactroute');
const organisingCommitteeRouter = require('./organisingcommitteeRoutes');
const internationalCommitteeRouter = require('./internationalRoutes');
const technicalCommitteeRouter = require('./technicalRoutes.js');

const router=Router();

router
.use("/user",userRouter)
.use("/photogallery",photoGalleryRouter)
.use("/speaker",speakerRouter) 
.use("/papers",noticeRouter)
.use("/recentupdate",recendUpdatesRouter)
.use("/contact",contactRouter)
.use("/organisingcommitee",organisingCommitteeRouter)
.use("/internationalcommitee",internationalCommitteeRouter)
.use("/technicalcommitee",technicalCommitteeRouter)
module.exports=router;