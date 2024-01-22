import { FactoryApi } from './FactoryApi';

import { CompanyType } from '$configs';

class CompanyApi extends FactoryApi {
  constructor() {
    super('http://localhost:3000');
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
}

export const companyApi = new CompanyApi();
