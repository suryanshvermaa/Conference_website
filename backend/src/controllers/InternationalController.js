const InternationalAdvisoryCommitteeMember=require("../models/InternationalAdvisoryCommitteeMember.js");

/**
 * 
 * @description create a new member in the international-committee committee
 * @route POST /internationalcommittee/createMember
 * @access Private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
exports.createMember=async(req,res)=>{
   try {
       const {name,specialization,college,committee,imageUrl,description}=req.body;
       if(!name || !specialization || !college || !committee || !imageUrl || !description){
           return res.status(400).json({success:false,msg:"these fields cannot be empty"})
       }
       const newMember=new InternationalAdvisoryCommitteeMember({
              name,
              specialization:[...String(specialization).split(',').map(item => item.trim())],
              college,
              committee,
              imageUrl,
              description
       });
       await newMember.save();
       res.status(201).json({success:true,msg:`successfully international committee member`});
   } catch (err) {
    res.status(500).json({ error: err.message });
   }
}

/**
 * 
 * @description get all members of the international committee
 * @route GET /internationalcommittee/getAllMembers
 * @access private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res  
 */
exports.getAllMembers=async(req,res)=>{
    try {
        const members=await InternationalAdvisoryCommitteeMember.find();
        res.json({success:true,members});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

/**
 * 
 * @description delete a member from the international committee
 * @route DELETE /internationalcommittee/deleteMember/:id
 * @access private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res  
 */
exports.deleteMember=async(req,res)=>{
    try {
        const {id}=req.params;
        if(!id){
            return res.status(400).json({success:false,msg:"id is required"});
        }
        const member=await InternationalAdvisoryCommitteeMember.findByIdAndDelete(id);
        if(!member){
            return res.status(400).json({success:false,msg:"member not found"});
        }
        res.json({success:true,msg:`successfully deleted international committee member`});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
/**
 * 
 * @description update a member in the international committee
 * @route PUT /internationalcommittee/updateMember/:id
 * @access private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
exports.updateMember=async(req,res)=>{
   try {
       const {id}=req.params;
        if(!id){
              return res.status(400).json({success:false,msg:"id is required"});
        }
        const member=await InternationalAdvisoryCommitteeMember.findById(id);
        if(!member){
            return res.status(400).json({success:false,msg:"member not found"});
        }
        const {name,specialization,college,committee,imageUrl,description}=req.body;
        if(!name || !specialization || !college || !committee || !imageUrl || !description){
            return res.status(400).json({success:false,msg:"these fields cannot be empty"})
        }
        member.name=name;
        member.specialization=[...String(specialization).split(',')];
        member.college=college;
        member.committee=committee;
        member.imageUrl=imageUrl;
        member.description=description;
        await member.save();
        res.status(201).json({success:true,msg:`successfully updated International Advisory Committee member`});
   } catch (err) {
        res.status(500).json({ error: err.message });
   }
}

/**
 * 
 * @description get a member from the international committee
 * @route GET /internationalcommittee/getMember/:id
 * @access private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res  
 */
exports.getMember=async(req,res)=>{
    try {   
        const {id}=req.params;
        if(!id){
            return res.status(400).json({success:false,msg:"id is required"});
        }
        const member=await InternationalAdvisoryCommitteeMember.findById(id);
        if(!member){
            return res.status(400).json({success:false,msg:"member not found"});
        }
        res.json({success:true,member});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}