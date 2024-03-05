import { useEffect, useMemo } from 'react';
import { FieldValues, Path, PathValue, useController } from 'react-hook-form';
import uuid from 'react-native-uuid';

import { FormFieldProps } from './types';

import {
  AddressFieldType,
  countryAddressConfig,
  useCompanyCreationStore,
} from '$app/stores/company';
import { Input, InputType } from '$ui';

type Params<Type extends FieldValues> = Pick<
  FormFieldProps<Type>,
  'index' | 'control' | 'trigger' | 'setValue' | 'getValues'
>;

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { control, index, trigger, setValue, getValues } = params;

  const { company } = useCompanyCreationStore();

  const {
    field: { value },
  } = useController({
    control,
    name: `address.${index}.country` as Path<Type>,
  });

  useEffect(() => {
    const isAddressNotChanged =
      JSON.stringify(company.address[index]) ===
      JSON.stringify(getValues().address[index]);

    if (isAddressNotChanged) {
      return;
    }

    setValue(
      `address.${index}.state` as Path<Type>,
      '' as PathValue<Type, Path<Type>>,
      { shouldValidate: true },
    );
    setValue(
      `address.${index}.zipCode` as Path<Type>,
      '' as PathValue<Type, Path<Type>>,
      { shouldValidate: true },
    );
    trigger(`address.${index}` as Path<Type>);
  }, [value, index, setValue, trigger, company, getValues]);

  const addressFields = useMemo(() => {
    if (!value) {
      return null;
    }

    const fields = countryAddressConfig[value].map(
      (field: AddressFieldType) => {
        const key = uuid.v4() as string;

        return (
          <Input
            key={key}
            type={InputType.TEXT}
            placeholder={field.placeholder}
            control={control}
            name={`address.${index}.${field.name}` as Path<Type>}
            mask={field.mask}
          />
        );
      },
    );

    return fields;
  }, [value, control, index]);

  return { addressFields };
};
