const mongoose = require('mongoose');

const usnValidator =[
  {
    validator: function (v){
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
  likes:{ type: Number, default: 0},
  dislikes:{ type: Number,default: 0},
  createdAt: { type: Date, default: Date.now }
});

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  usn: { type: String, required: true,set: v=> v.trim().toUpperCase(), 
  validate: usnValidator },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  replies: [replySchema],
  likes:{ type: Number, default: 0},
  dislikes:{ type: Number,default: 0}
});

module.exports = mongoose.model('Comment', commentSchema);