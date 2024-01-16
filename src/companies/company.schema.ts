import Joi from 'joi';
import { Company } from './companies.entity';

export const companyCreateSchema = Joi.object<Company>({
    companyname: Joi.string().min(3).required(),
    registration_date: Joi.date().optional(),
    country: Joi.string().optional(),
    city: Joi.string().optional(),
    postalcode: Joi.number().optional(),
    street: Joi.string().optional(),
    housenumber: Joi.string().optional(),
    state: Joi.string().optional(),
    object_of_the_company: Joi.string().optional(),
});

export const companyUpdateSchema = Joi.object<Partial<Company>>({
    companyname: Joi.string().min(3).optional(),
    registration_date: Joi.date().optional(),
    country: Joi.string().optional(),
    city: Joi.string().optional(),
    postalcode: Joi.number().optional(),
    street: Joi.string().optional(),
    housenumber: Joi.string().optional(),
    state: Joi.string().optional(),
    object_of_the_company: Joi.string().optional(),
});
