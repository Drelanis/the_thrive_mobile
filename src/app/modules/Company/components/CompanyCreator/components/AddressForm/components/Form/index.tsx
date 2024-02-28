import { VStack } from '@gluestack-ui/themed';
import { FieldValues } from 'react-hook-form';

import { FormProps } from './type';
import { useLogic } from './useLogic';

import { Button } from '$ui';

export const Form = <Type extends FieldValues>(props: FormProps<Type>) => {
  const { fields, control, append, remove } = props;

  const { addressFields, appendField } = useLogic({
    fields,
    control,
    remove,
    append,
  });

  return (
    <VStack>
      {addressFields}
      <Button onPress={appendField}>Add new address</Button>
    </VStack>
  );
};
