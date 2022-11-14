type Tasks = {
    id: Number,
    person: String,
    task: String,
    doDate: Date,
    isDone: Boolean
};

type Task = Omit<Tasks, "id">;

export { Tasks, Task }