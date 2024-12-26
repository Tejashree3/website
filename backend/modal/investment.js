const { required } = require('joi');
const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
rating:{
    type:String,
required:true
},
 
  image: {
    type: String,
    required: true
  },
  
});

const investment = mongoose.model('INVESTMENT', investmentSchema);
module.exports = investment;
