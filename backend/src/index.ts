import express, { Request, Response } from "express";
const app = express()
app.use(express.json())

import cors from "cors";
app.use(cors())

import "dotenv/config";
import mongoose from "mongoose";

mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=> {
    console.log("Connected to datbase");
    
})

app.get('/', async(req: Request ,res: Response) => {
    res.json({message: 'Food Ordering App'})
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})