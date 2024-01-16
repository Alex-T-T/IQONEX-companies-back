import { DeleteResult } from 'typeorm';
import { HttpStatuses } from '../app/enums/http-statuses.enum';
import HttpExeption from '../app/exeptions/http-exeption';
import { AppDataSource } from '../db/db';
import { Company } from '../companies/companies.entity';
import {
    deleteCompanyByName,
    createNewCompany,
} from '../companies/companies.service';

const companyRepository = AppDataSource.getRepository(Company);

describe('DELETE /companies/:company Unit test', () => {
    it('should delete a company from the database', async () => {
        const mockDelete = jest
            .spyOn(companyRepository, 'delete')
            .mockResolvedValue({ affected: 1 } as DeleteResult);
        const testCompany = {
            companyname: '1 Lviv Eco Park',
            city: 'Lviv',
        };
        const result = await deleteCompanyByName(testCompany.companyname);
        expect(mockDelete).toHaveBeenCalledWith({
            companyname: testCompany.companyname,
        });
        expect(result).toEqual({ affected: 1 } as DeleteResult);
    });
    it('should throw an exception if the Company is not found', async () => {
        const mockDelete = jest
            .spyOn(companyRepository, 'delete')
            .mockResolvedValue({ affected: 0 } as DeleteResult);
        const testCompany = {
            companyname: '1 Lviv Eco Park',
            city: 'Lviv',
        };
        await expect(
            deleteCompanyByName(testCompany.companyname)
        ).rejects.toThrow(
            new HttpExeption(HttpStatuses.NOT_FOUND, 'Company not found')
        );
        expect(mockDelete).toHaveBeenCalledWith({
            companyname: testCompany.companyname,
        });
    });
});
