import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
    enum: ['Male', 'Female']
  },
  email:{
    type: String,
    require: true,
    unique: true
  },
  age:{
    type: Number,
    require: true,
  },
  password :{
    type: String,
    require:true
  },
  mobileNo:{
    type: Number,
    require:true
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  updetedAt:{
    type: Date,
    default: Date.now
  }
},{
    versionKey: false
});


export default mongoose.model("User",userSchema);
