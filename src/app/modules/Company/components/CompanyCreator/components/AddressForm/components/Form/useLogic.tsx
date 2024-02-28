import { useCallback, useMemo } from 'react';
import { ArrayPath, FieldArray, FieldValues } from 'react-hook-form';

import { FormField } from './FormField';
import { FormProps } from './type';

import { officeAddressStore } from '$app/stores/company';

export const useLogic = <Type extends FieldValues>(params: FormProps<Type>) => {
  const { fields, remove, control, append } = params;

  const addressFields = useMemo(() => {
    return fields.map((field, index) => {
      return (
        <FormField
          key={field.id}
          remove={remove}
          index={index}
          control={control}
        />
      );
    });
  }, [control, fields, remove]);

  const appendField = useCallback(
    () => append(officeAddressStore as FieldArray<Type, ArrayPath<Type>>),
    [append],
  );

  return { addressFields, appendField };
};
