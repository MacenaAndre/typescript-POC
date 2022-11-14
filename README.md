# typescript-POC

This application is meant to oragnize house tasks by person.

POST: /task
Body {person: "andre", task: "clean the bathroom", doDate: "2022-11-14", isDone: false}

GET: /tasks
Will read all tasks in the database

GET: /tasks?pesron=andre
Will filter tasks designated to someone especific, by this person name

PUT: /task/:id
Will find a task by the database id and check as Done

DELETE: /task/:id
Will delete a task by the database id
