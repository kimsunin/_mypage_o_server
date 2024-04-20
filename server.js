import express from "express";
import mongoose from "mongoose";
import rootRouter from "./src/Routers/rootRouter.js";
import userRouter from "./src/Routers/userRouter.js";
import morgan from "morgan";
import cors from "cors";

//서버
const app = express();
const port = 4000;
const logger = morgan("dev");

app.use(logger);
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/", rootRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`mypage-server:http://localhost:${port}✅`);
});

//몽고디비
mongoose.connect("mongodb://127.0.0.1:27017/tal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  pw: process.env.PRIVATE_KEY,
});
const db = mongoose.connection;
db.on("error", (error) => console.log("❌ DB ERROR", error));
db.once("open", () => console.log("Mongodb 연결성공!"));
