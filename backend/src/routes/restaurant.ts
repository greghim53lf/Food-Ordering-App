// restaurant router
import { Router } from "express";
const restaurantRouter = Router();

// controllers for routes
import { createRestaurant } from "../controllers/restaurant";

// auth and validation middlewares
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateRestaurantRequest } from "../middleware/validation";

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
restaurantRouter.post(
  "/",
  jwtCheck,
  jwtParse,
  validateRestaurantRequest,
  upload.single("imageFile"),
  createRestaurant
);

export default restaurantRouter;
