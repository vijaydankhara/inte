import express from "express";
import { create,getOne,getAll,update,deleteUser } from "../controller/UserController.js";

const route =  express.Router();

route.post("/create",create);
route.get("/getone/:id",getOne);
route.get("/getall",getAll);
route.put("/update/:id",update);
route.delete("/deleteuser/:id",deleteUser);


export default route