import { FactoryApi } from './FactoryApi';

import { CompanyType, Routes } from '$configs';

class Company extends FactoryApi {
  constructor() {
    super(Routes.MAIN);
  }

  public async findAll(): Promise<CompanyType[]> {
    const data = (await this.get(Routes.DIRECTIONS)) as CompanyType[];
    return data;
  }

  public async findOne(email: string): Promise<CompanyType | undefined> {
    const data = (await this.get(Routes.DIRECTIONS)) as CompanyType[];
    const currentCompany = data.find((company) => company.email === email);
    return currentCompany;
  }

  public async create(companyDto: CompanyType): Promise<CompanyType> {
    const data = await this.post(Routes.DIRECTIONS, companyDto);
    return data;
  }
}

export const companyApi = new Company();
