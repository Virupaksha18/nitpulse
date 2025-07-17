const mongoose = require('mongoose');

const usnValidator =[
  {
    validation: function (v){
      return /^[0-9][A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/.test(v);

    },
    message:props =>`${props.value} is not a valid USN! Format:3NA22CS092`
  }
];

const replySchema = new mongoose.Schema({
  name: { type: String, required: true },
  usn: { type: String, required: true,set: v=> v.trim().toUpperCase(), 
  validate: usnValidator },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  usn: { type: String, required: true,set: v=> v.trim().toUpperCase(), 
  validate: usnValidator },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  replies: [replySchema]  // nested replies
});

module.exports = mongoose.model('Comment', commentSchema);