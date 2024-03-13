import { Router } from "express";
import { createUser } from "../controllers/user";
import { jwtCheck } from "../middleware/Auth";

const userRouter = Router();

userRouter.post("/", jwtCheck, createUser);

export default userRouter;
