import { useMemo } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { SelectDirectionsProps } from './types';

import { useCompanyCreationStore } from '$app/stores/company';
import { useModal } from '$common';

type Params<Type extends FieldValues> = Omit<
  SelectDirectionsProps<Type>,
  'isValid'
>;

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { control, name, directions, ...restProps } = params;

  const { company, setCompany } = useCompanyCreationStore();

  const { isOpen, onApplyHandler, onCloseHandler, onOpenHandler } = useModal({
    name,
    ...restProps,
  });

  const options = useMemo(() => {
    if (!directions) {
      return [];
    }

    return directions.map((direction) => {
      return {
        value: direction.id,
        label: direction.description,
      };
    });
  }, [directions]);

  const {
    field: { value },
  } = useController({ control, name });

  const onSubmit = () => {
    setCompany({ ...company, directions: value });

    onApplyHandler();
  };

  const selectValue = useMemo(() => {
    return value.map((id: string) => {
      const matchingObject = options.find((option) => option.value === id);

      return matchingObject ? matchingObject.label : null;
    });
  }, [value, options]);

  return {
    selectValue,
    onSubmit,
    isOpen,
    onCloseHandler,
    onOpenHandler,
    options,
  };
};
