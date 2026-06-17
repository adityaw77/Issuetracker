const mongoose = require('mongoose')

const issueSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type: String},
    due:{type:Number},
    owner:{type:String},
    
});

module.exports=mongoose.model('Issue',issueSchema);