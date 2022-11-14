import { QueryResult } from "pg";
import connection from "../database/database.js";
import { Task, Tasks } from "../protocols/task.protocol.js";

function insertTask(task: Task): Promise<QueryResult> {
    return connection.query(
        `INSERT INTO tasks (person, task, "doDate", "isDone") VALUES ($1, $2, $3, $4);`,
        [task.person, task.task, task.doDate, task.isDone]
    )
}

function getTaskByPerson(person: string): Promise<QueryResult<Tasks>> {
    return connection.query(
        `SELECT * FROM tasks WHERE person = $1;`,
        [person]
    )
}

function getAllTasks(): Promise<QueryResult<Tasks>> {
    return connection.query(
        `SELECT * FROM tasks;`
    )
}

function checkTask(id: number): Promise<QueryResult<Tasks>> {
    return connection.query(
        `UPDATE tasks SET "isDone" = true WHERE id = $1;`,
        [id]
    )
}

function eraseTask(id: Number): Promise<QueryResult<Tasks>> {
    return connection.query(
        `DELETE FROM tasks WHERE id = $1;`,
        [id]
    )
}

export { insertTask, getTaskByPerson, getAllTasks, checkTask, eraseTask };