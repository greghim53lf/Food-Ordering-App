// user router
import { Router } from "express";
const userRouter = Router();

// controllers for routes
import { createUser, getUser, updateUser } from "../controllers/user";

// middlewares for routes
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";

// routes and methods
userRouter.post("/", jwtCheck, createUser);
userRouter.get("/", jwtCheck, jwtParse, getUser);
userRouter.put("/", jwtCheck, jwtParse, validateUserRequest, updateUser);

export default userRouter;
