import { useEffect, useMemo } from 'react';
import { FieldValues, Path, useController } from 'react-hook-form';

import { FormFieldProps } from './types';

import { AddressFieldType, countryAddressConfig } from '$app/stores/company';
import { Input, InputType } from '$ui';

type Params<Type extends FieldValues> = Pick<
  FormFieldProps<Type>,
  'index' | 'control' | 'setCountry'
>;

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { control, index, setCountry } = params;

  const {
    field: { value },
  } = useController({
    control,
    name: `address.${index}.country` as Path<Type>,
  });

  useEffect(() => {
    setCountry(value);
  }, [value, setCountry]);

  const addressFields = useMemo(() => {
    if (!value) {
      return null;
    }

    const fields = countryAddressConfig[value].map(
      (field: AddressFieldType) => {
        // TODO replace with uuid!
        const key = Math.random();

        return (
          <Input
            key={key}
            type={InputType.TEXT}
            placeholder={field.placeholder}
            control={control}
            name={`address.${index}.${field.name}` as Path<Type>}
          />
        );
      },
    );

    return fields;
  }, [value, control, index]);

  return { addressFields };
};
