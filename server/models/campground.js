const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  image:String,
  price:Number,
  description:String,
  location:String
},{
  toJSON:{virtuals:true},
  virtuals:{
    id:{
      get() {return this._id}
    }
  }
})

module.exports = mongoose.model('Campground', campgroundSchema);