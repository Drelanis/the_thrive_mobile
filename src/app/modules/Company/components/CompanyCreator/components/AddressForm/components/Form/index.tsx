import { VStack } from '@gluestack-ui/themed';
import { FieldValues } from 'react-hook-form';

import { FormProps } from './type';
import { useLogic } from './useLogic';

import { Button } from '$ui';

export const Form = <Type extends FieldValues>(props: FormProps<Type>) => {
  const { fields, control, append, remove, setValue } = props;

  const { addressFields, appendAddress } = useLogic({
    fields,
    control,
    remove,
    append,
    setValue,
  });

  return (
    <VStack>
      {addressFields}
      <Button onPress={appendAddress}>Add new address</Button>
    </VStack>
  );
};
