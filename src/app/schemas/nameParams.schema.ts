import Joi from 'joi';

export const nameParamsSchema = Joi.object<{ name: string }>({
    name: Joi.string().required(),
});
