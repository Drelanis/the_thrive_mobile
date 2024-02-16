import { FactoryApi } from './FactoryApi';

import { DirectionType, Routes } from '$configs';

class Direction extends FactoryApi {
  constructor() {
    super(Routes.MAIN);
  }

  public async findAll(): Promise<DirectionType[]> {
    const data = (await this.get(Routes.DIRECTIONS)) as DirectionType[];
    return data;
  }
}

export const directionApi = new Direction();
