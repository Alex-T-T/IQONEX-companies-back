import { Company } from '../companies.entity';

export type companiesDataType = { data: Company[]; length: number };

export type companiesUpdateDataType = Partial<Company>;
