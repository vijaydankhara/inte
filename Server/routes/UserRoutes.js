import express from "express";
import { create,getOne,getAll,update,deleteUser } from "../controller/UserController.js";

const route =  express.Router();

route.post("/create",create);
route.get("/getone",getOne);
route.get("/getall",getAll);
route.put("/update",update);
route.delete("/deleteuser",deleteUser);


export default route