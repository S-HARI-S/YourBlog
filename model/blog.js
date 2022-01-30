const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema ({

   heading:{
       type: String, 
       required: true,
   },
   body:{
    type: String, 
    required: true,
   },
   author:{
    type: String, 
    required: true,
   },

} , {timestamps: true});



const blog = mongoose.model('BlogS', blogSchema);


module.exports = blog;




