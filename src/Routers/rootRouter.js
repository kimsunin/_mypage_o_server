import express from "express";
import { postJoin, postLogin } from "../Handlers/rootHandler.js";

const rootRouter = express.Router();

rootRouter.route("/login").post(postLogin);
rootRouter.post("/join", postJoin);
export default rootRouter;
