import bcrypt from "bcryptjs";
import UserModel from "../model/UserModel.js";

export const create = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ msg: "User Data Is Not Found" });
    }

    const { firstName, lastName, gender, email, age, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const userData = new UserModel({
      ...req.body,
      password: hashPassword,
    });
    const saveData = await userData.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getOne = async (req,res) =>{
try {
  const id = req.params.id;
  const userExit = await UserModel.findById(id);
  if(!userExit){
    return res.status(404).json({msg: "User Not Found"});
  }
  res.status(200).json(userExit)
} catch (error) {
  res.status(500).json({error: error.message});
}
}


export const getAll = async (req,res) =>{
  try {
    const userData = await UserModel.find();
    if(!userData){
      return res.status(404).json({msg: "User Data Not Foun"});
    }
    res.status(200).json(userData)
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}


export const update = async (req,res) =>{
  try {
    const id = req.params.id;
    const userExit = await UserModel.findById(id);
    if(!userExit) {
      return res.status(404).json({msg: "User Not Found"});
    }
    const updateData = await UserModel.findByIdAndUpdate(id,req.body,{
      new: true,
    });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export const deleteUser = async (req,res) =>{
  try {
    const id = req.params.id;
    const userExit = await UserModel.findById(id);
    if(!userExit){
      res.status(404).json({mes: "User Not Found"})
    }
    await UserModel.findByIdAndDelete(id);
    res.status(200).json({msg: "User Delete Successfully"});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};