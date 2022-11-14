import Joi from "joi";

const taskSchema = Joi.object({
    person: Joi.string().required(),
    task: Joi.string().required(),
    doDate: Joi.date().required(),
    isDone: Joi.boolean().required()
});
   
export { taskSchema };
