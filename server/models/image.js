const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename:{
    type:String,
    requred:true
  },
  url: {
    type:String,
    required:true
  },
  mimetype: {
    type:String,
    required:true
  },
  path:{
    type:String,
    required:true,
  },
  size:{
    type:Number,
    required:true
  }
}, {
  toJSON:{virtuals:true},
  virtuals:{
    id:{
      get() {return this._id}
    }
  }
})

// const Image = mongoose.model('Image', imageSchema);

module.exports = imageSchema;