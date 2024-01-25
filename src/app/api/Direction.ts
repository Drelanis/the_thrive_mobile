import { FactoryApi } from './FactoryApi';

import { CompanyType } from '$configs';

class Direction extends FactoryApi {
  constructor() {
    super('http://localhost:3000');
  }

  public async findAll(): Promise<CompanyType[]> {
    const data = (await this.get('/directions')) as CompanyType[];
    return data;
  }
}

export const directionApi = new Direction();
