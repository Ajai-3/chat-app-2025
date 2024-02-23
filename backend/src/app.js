import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/messgae.route.js";

dotenv.config()
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);


export default app;


