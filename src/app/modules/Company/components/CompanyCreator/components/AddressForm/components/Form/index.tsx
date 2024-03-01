import { VStack } from '@gluestack-ui/themed';
import { FieldValues } from 'react-hook-form';

import { FormProps } from './type';
import { useLogic } from './useLogic';

import { Button } from '$ui';

export const Form = <Type extends FieldValues>(props: FormProps<Type>) => {
  const { addressFields, appendAddress } = useLogic(props);

  return (
    <VStack>
      {addressFields}
      <Button onPress={appendAddress}>Add new address</Button>
    </VStack>
  );
};
