import express from "express";
import { createTask, editTask, getTasks } from "../controllers/tasks.controllers.js";
import { validateTask } from "../middlewares/tasks.middleware.js";

const taskRouter = express.Router();

taskRouter.post("/task", validateTask, createTask);
taskRouter.get("/tasks", getTasks);
taskRouter.put("/task/:id", editTask)

export { taskRouter };