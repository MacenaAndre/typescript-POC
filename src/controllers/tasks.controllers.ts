import { Request, Response } from "express";
import { Task } from "../protocols/task.protocol.js";
import { checkTask, eraseTask, getAllTasks, getTaskByPerson, insertTask } from "../repositories/tasks.repositories.js";


async function createTask(req: Request, res: Response) {
    const task: Task = res.locals.Task;

    try {
        await insertTask(task);
        return res.sendStatus(201);
        
    } catch (error) {
        return res.sendStatus(500);
    }
}

async function getTasks(req: Request, res: Response) {
    const person  = req.query.person as string;

    try {
        if(person) {
           const personTasks = await getTaskByPerson(person);
           return res.status(200).send(personTasks.rows);
        }

        const tasks = await getAllTasks();
        return res.status(200).send(tasks.rows);
        
    } catch (error) {
        return res.sendStatus(500);   
    }
}

async function editTask(req: Request, res: Response) {
    const id = req.params.id;

    try {
        await checkTask(Number(id))
         return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(500);
    }
   
}

async function deleteTask(req: Request, res: Response) {
    const id = req.params.id;

    try {
        await eraseTask(Number(id));
        return res.sendStatus(200)
    } catch (error) {
        return res.sendStatus(500);
    }
    
}
export { createTask, getTasks, editTask, deleteTask };