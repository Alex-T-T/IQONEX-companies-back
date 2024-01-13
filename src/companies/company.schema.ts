import Joi from 'joi';
import { Company } from './companies.entity';

export const companyCreateSchema = Joi.object<Company>({
    companyname: Joi.string().required(),
    registration_date: Joi.date().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    postalcode: Joi.number().required(),
    street: Joi.string().required(),
    housenumber: Joi.string().required(),
    state: Joi.string().required(),
    object_of_the_company: Joi.string().required(),
});

export const companyUpdateSchema = Joi.object<Partial<Company>>({
    companyname: Joi.string().optional(),
    registration_date: Joi.date().optional(),
    country: Joi.string().optional(),
    city: Joi.string().optional(),
    postalcode: Joi.number().optional(),
    street: Joi.string().optional(),
    housenumber: Joi.string().optional(),
    state: Joi.string().optional(),
    object_of_the_company: Joi.string().optional(),
});
