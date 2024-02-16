import { FactoryApi } from './FactoryApi';

import { CompanyType } from '$configs';

class Company extends FactoryApi {
  constructor() {
    super('http://localhost:3456');
  }

  public async findAll(): Promise<CompanyType[]> {
    const data = (await this.get('/companies')) as CompanyType[];
    return data;
  }

  public async findOne(email: string): Promise<CompanyType | undefined> {
    const data = (await this.get('/companies')) as CompanyType[];
    const currentCompany = data.find((company) => company.email === email);
    return currentCompany;
  }

  public async create(companyDto: CompanyType): Promise<CompanyType> {
    const data = await this.post('/companies', companyDto);
    return data;
  }
}

export const companyApi = new Company();
