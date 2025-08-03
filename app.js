import express, { json, urlencoded } from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
import { connectToMongoDB } from "./config/db/connect.config.js";
import homeRouter from "./routes/home.router.js";
import studentRouter from './routes/student.router.js'

const app = express();
// dotenv.config();
const PORT = 3000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/", homeRouter);
app.use("/api/students", studentRouter);

const startServer = async () => {
  await connectToMongoDB();
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
};
await startServer()
