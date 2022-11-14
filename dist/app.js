import express from "express";
import dotenv from "dotenv";
import { taskRouter } from "./routes/tasks.routes.js";
dotenv.config();
var server = express();
server.use(express.json());
server.use(taskRouter);
server.listen(process.env.PORT, function () {
    console.log("Listening on port ".concat(process.env.PORT, "..."));
});
