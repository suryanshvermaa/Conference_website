const {Router} = require('express');
const userRouter = require('./userroute');
const photoGalleryRouter = require('./photoRoutes');
const speakerRouter = require('./speakerRoutes');
const noticeRouter = require('./noticeRoutes');
const recendUpdatesRouter = require('./recentUpdateRoutes');
const contactRouter = require('./contactroute');
const organisingCommitteeRouter = require('./organisingcommitteeRoutes');

const router=Router();

router
.use("/user",userRouter)
.use("/photogallery",photoGalleryRouter)
.use("/speaker",speakerRouter) 
.use("/papers",noticeRouter)
.use("/recentupdate",recendUpdatesRouter)
.use("/contact",contactRouter)
.use("/organisingcommitee",organisingCommitteeRouter)
module.exports=router;