import { Request, Response } from 'express';
import { Company } from './companies.entity';
import * as companyService from './companies.service';
import {
    companiesDataType,
    companiesUpdateDataType,
} from './types/companies.types';

const getAllCompanies = async (req: Request, res: Response): Promise<void> => {
    const limit = Number(req.query.limit) || 100;
    const page = Number(req.query.page) || 1;
    const skip = limit * (page - 1);

    const companiesData: companiesDataType =
        await companyService.getAllCompanies(limit, skip);

    res.status(200).json(companiesData);
};

const createNewCompany = async (req: Request, res: Response): Promise<void> => {
    const data: Company = req.body;
    const company: Company = await companyService.createNewCompany(data);

    res.status(201).json(company);
};

const updateCompanyByName = async (
    req: Request<{ name: string }>,
    res: Response
): Promise<void> => {
    const companyName = req.params.name;
    const info: companiesUpdateDataType = req.body;
    await companyService.updateCompanyByName(companyName, info);
    res.status(200).json('Successfully updated');
};

const deleteCompanyByName = async (
    req: Request<{ name: string }>,
    res: Response
): Promise<void> => {
    const companyName = req.params.name;

    await companyService.deleteCompanyByName(companyName);
    res.status(200).json({ message: 'Company successfully deleted' });
};

export {
    getAllCompanies,
    createNewCompany,
    updateCompanyByName,
    deleteCompanyByName,
};
