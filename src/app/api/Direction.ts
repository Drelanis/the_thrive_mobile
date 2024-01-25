import { FactoryApi } from './FactoryApi';

import { DirectionType } from '$configs';

class Direction extends FactoryApi {
  constructor() {
    super('http://localhost:3000');
  }

  public async findAll(): Promise<DirectionType[]> {
    const data = (await this.get('/directions')) as DirectionType[];
    return data;
  }
}

export const directionApi = new Direction();
