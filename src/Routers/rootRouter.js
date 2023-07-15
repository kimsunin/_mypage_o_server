import express from "express";
import {
  getLogin,
  logout,
  postJoin,
  postLogin,
} from "../Handlers/rootHandler.js";

const rootRouter = express.Router();

rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.post("/join", postJoin);
rootRouter.post("/logout", logout);
export default rootRouter;
