import Joi, { ObjectSchema } from "joi";

const taskSchema: ObjectSchema = Joi.object({
    person: Joi.string().required(),
    task: Joi.string().required(),
    doDate: Joi.date().required(),
    isDone: Joi.boolean().required()
});
   
export { taskSchema };
