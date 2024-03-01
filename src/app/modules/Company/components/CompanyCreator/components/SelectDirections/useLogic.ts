import { useEffect } from 'react';
import { FieldValues } from 'react-hook-form';

import { SelectDirectionsProps } from './types';

import { COMPANY_DIRECTIONS } from '$app/stores/company';

type Params<Type extends FieldValues> = Pick<
  SelectDirectionsProps<Type>,
  'trigger' | 'name' | 'isValid'
>;

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { trigger, name, isValid } = params;

  useEffect(() => {
    trigger(name);
  }, [trigger, name, isValid]);

  return { options: COMPANY_DIRECTIONS };
};
