import express from "express";
import dotenv from "dotenv";
import { taskRouter } from "./routes/tasks.routes.js";
dotenv.config();

const server = express();

server.use(express.json());

server.use(taskRouter);


server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}...`)
})