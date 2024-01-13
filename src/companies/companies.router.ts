import express from 'express';
import controllerWrapper from '../app/utils/controller-wrapper';
import * as companiesController from './companies.controller';
import validator from '../app/middlewares/validation.middleware';
import { companyCreateSchema, companyUpdateSchema } from './company.schema';
import { nameParamsSchema } from '../app/schemas/nameParams.schema';

const router = express.Router();

router.get('/', controllerWrapper(companiesController.getAllCompanies));

router.post(
    '/',
    validator.body(companyCreateSchema),
    controllerWrapper(companiesController.createNewCompany)
);

router.patch(
    '/:name',
    validator.params(nameParamsSchema),
    validator.body(companyUpdateSchema),
    controllerWrapper(companiesController.updateCompanyByName)
);

router.delete(
    '/:name',
    validator.params(nameParamsSchema),
    controllerWrapper(companiesController.deleteCompanyByName)
);

export default router;
