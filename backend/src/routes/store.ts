// store router
import { Router } from "express";
const storeRouter = Router();

// controllers for routes
import { createStore } from "../controllers/store";

// auth and validation middlewares
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateStoreRequest } from "../middleware/validation";

// multer middleware for images
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

// routes and methods
storeRouter.post(
  "/",
  jwtCheck,
  jwtParse,
  validateStoreRequest,
  upload.single("imageFile"),
  createStore
);

export default storeRouter;
