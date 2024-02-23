import { useEffect, useState } from 'react';

import { OptionType } from './types';

import { directionApi } from '$app/api';

export const useLogic = () => {
  const [options, setOptions] = useState<OptionType[]>([]);

  const getOptions = async () => {
    const directions = await directionApi.findAll();
    const result = directions.map(({ description }) => {
      return { label: description, value: description };
    });

    setOptions(result);
  };

  useEffect(() => {
    getOptions();
  }, []);

  return { options };
};
