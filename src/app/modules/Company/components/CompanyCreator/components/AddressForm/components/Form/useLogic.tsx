import { useCallback, useMemo } from 'react';
import { ArrayPath, FieldArray, FieldValues } from 'react-hook-form';

import { FormField } from './components';
import { FormProps } from './type';

import { officeAddressStore } from '$app/stores/company';

export const useLogic = <Type extends FieldValues>(params: FormProps<Type>) => {
  const { fields, remove, control, append, setValue, setCountry } = params;

  const addressFields = useMemo(() => {
    return fields.map((field, index) => {
      const onRemove = () => {
        remove(index);
      };

      return (
        <FormField
          key={field.id}
          remove={onRemove}
          index={index}
          control={control}
          setValue={setValue}
          setCountry={setCountry}
        />
      );
    });
  }, [control, fields, remove, setValue, setCountry]);

  const appendAddress = useCallback(() => {
    append(officeAddressStore as FieldArray<Type, ArrayPath<Type>>);
  }, [append]);

  return { addressFields, appendAddress };
};
