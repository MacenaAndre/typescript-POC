import { Request, Response, NextFunction } from "express";
import { Task } from "../protocols/task.protocol.js";
import { taskSchema } from "../schemas/tasks.schema.js";

function validateTask (req: Request, res: Response, next: NextFunction) {

    const task = req.body as Task;

    const { error } = taskSchema.validate(task, {abortEarly: false});

    if(error) {
        return res.status(400).send({
            message: error.message
        })
    }

    res.locals.Task = task;
    next();
}

export { validateTask }