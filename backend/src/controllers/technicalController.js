const TechnicalProgrammeCommitteeMember=require("../models/TechnicalProgrammeCommitteeMember.js");

/**
 * 
 * @description create a new member in the technical-committee committee
 * @route POST /technicalcommittee/createMember
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
       const newMember=new TechnicalProgrammeCommitteeMember({
              name,
              specialization:[...String(specialization).split(',').map(item => item.trim())],
              college,
              committee,
              imageUrl,
              description
       });
       await newMember.save();
       res.status(201).json({success:true,msg:`successfully technical committee member`});
   } catch (err) {
    res.status(500).json({ error: err.message });
   }
}

/**
 * 
 * @description get all members of the technical committee
 * @route GET /technicalcommittee/getAllMembers
 * @access private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res  
 */
exports.getAllMembers=async(req,res)=>{
    try {
        const members=await TechnicalProgrammeCommitteeMember.find();
        res.json({success:true,members});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

/**
 * 
 * @description delete a member from the technical committee
 * @route DELETE /technicalcommittee/deleteMember/:id
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
        const member=await TechnicalProgrammeCommitteeMember.findByIdAndDelete(id);
        if(!member){
            return res.status(400).json({success:false,msg:"member not found"});
        }
        res.json({success:true,msg:`successfully deleted technical committee member`});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
/**
 * 
 * @description update a member in the technical committee
 * @route PUT /technicalcommittee/updateMember/:id
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
        const member=await TechnicalProgrammeCommitteeMember.findById(id);
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
        res.status(201).json({success:true,msg:`successfully updated technical programme Committee member`});
   } catch (err) {
        res.status(500).json({ error: err.message });
   }
}

/**
 * 
 * @description get a member from the technical committee
 * @route GET /technicalcommittee/getMember/:id
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
        const member=await TechnicalProgrammeCommitteeMember.findById(id);
        if(!member){
            return res.status(400).json({success:false,msg:"member not found"});
        }
        res.json({success:true,member});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}