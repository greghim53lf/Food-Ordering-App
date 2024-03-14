import { Router } from "express";
import { createUser, getUser, updateUser } from "../controllers/user";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";

const userRouter = Router();

userRouter.post("/", jwtCheck, createUser);
userRouter.get("/", jwtCheck, jwtParse, getUser);
userRouter.put("/", jwtCheck, jwtParse, validateUserRequest, updateUser);

export default userRouter;
