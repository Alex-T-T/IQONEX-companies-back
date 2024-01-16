import { HttpStatuses } from '../app/enums/http-statuses.enum';
import HttpExeption from '../app/exeptions/http-exeption';
import { AppDataSource } from '..//db/db';
import { Company } from './companies.entity';
import {
    companiesDataType,
    companiesUpdateDataType,
} from './types/companies.types';
import { DeleteResult, UpdateResult } from 'typeorm';

const companyRepository = AppDataSource.getRepository(Company);

const getAllCompanies = async (
    limitPerPage: number,
    skip: number
): Promise<companiesDataType> => {
    const companies: Company[] = await companyRepository.find({
        skip,
        take: limitPerPage,
        order: { companyname: 'ASC' },
    });

    const length = await companyRepository.count();

    return { data: companies, length };
};

const createNewCompany = async (data: Company): Promise<Company> => {
    const company: Company | null = await companyRepository.findOneBy({
        companyname: data.companyname,
    });

    if (company) {
        throw new HttpExeption(
            HttpStatuses.BAD_REQUEST,
            'Company already exist'
        );
    }

    const newCompany: Company = await companyRepository.save(data);
    return newCompany;
};

const updateCompanyByName = async (
    name: string,
    data: companiesUpdateDataType
) => {
    const res: UpdateResult = await companyRepository
        .createQueryBuilder()
        .update(Company)
        .set(data)
        .where('companyname = :companyname', { companyname: name })
        .execute();

    if (!res.affected) {
        throw new HttpExeption(HttpStatuses.NOT_FOUND, 'Company not found');
    }
    return res;
};

const deleteCompanyByName = async (name: string): Promise<DeleteResult> => {
    const res: DeleteResult = await companyRepository.delete({
        companyname: name,
    });

    if (!res.affected) {
        throw new HttpExeption(HttpStatuses.NOT_FOUND, 'Company not found');
    }

    return res;
};

export {
    getAllCompanies,
    createNewCompany,
    updateCompanyByName,
    deleteCompanyByName,
};
