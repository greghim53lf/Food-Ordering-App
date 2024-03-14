import { Router } from "express";
import { createUser, updateUser } from "../controllers/user";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";

const userRouter = Router();

userRouter.post("/", jwtCheck, createUser);
userRouter.put("/", jwtCheck, jwtParse, validateUserRequest, updateUser);

export default userRouter;
