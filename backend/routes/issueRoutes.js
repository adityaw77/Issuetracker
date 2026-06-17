const express  = require('express');
const Issue = require ('../models/Issue');
const router = express.Router();

router.post('/',async(req,res)=>{
    try{
        const issue = new Issue(req.body);
        await issue.save();
        res.status(201).json(issue);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
});
router.get('/',async(req,res)=>{
    const issues = await Issue.find();
    res.json(issues);
})
//update ticket 
router.put('/:id',async(req,res)=>{
    try{ const updated=await Issue.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(updated);
    }catch(err){
        res.status(400).json({error:err.message});
    }
});
router.delete('/:id',async(req,res)=>{
    try{
        await Issue.findByIdAndDelete(req.params.id);
        res.json({message:'Deleted'});
    }catch(err){
         res.status(400).json({error:err.message});
    }
});
module.exports=router;