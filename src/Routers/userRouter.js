import express from "express";
import { getUser } from "../Handlers/userHandler.js";
import { editUser } from "../Handlers/userHandler.js";

const userRouter = express.Router();

userRouter.get("/:id([0-9a-f]{24})", getUser);
userRouter.post("/edit", editUser);

export default userRouter;
