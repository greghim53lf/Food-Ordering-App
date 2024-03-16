// express router setup
import express, { Request, Response } from "express";
const app = express();
app.use(express.json());

// cors middleware
import cors from "cors";
app.use(cors());

// initialize environment variables
import "dotenv/config";

// mongodb setup
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to datbase");
});

// coudinary setup
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// routes
app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "Greenie App" });
});
app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

// user router
import userRouter from "./routes/user";
app.use("/api/my/user", userRouter);

// restaurant router
import restaurantRouter from "./routes/restaurant";
app.use("/api/my/restaurant", restaurantRouter);

// listen for request on the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
