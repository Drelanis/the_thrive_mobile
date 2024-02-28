import { View } from '@gluestack-ui/themed';
import { FieldValues, Path } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { FormProps } from './type';

import { Button, Input, InputType } from '$ui';

type Props<Type extends FieldValues> = {
  index: number;
} & Pick<FormProps<Type>, 'control' | 'remove'>;

export const FormField = <Type extends FieldValues>(props: Props<Type>) => {
  const { index, control, remove } = props;

  const onRemove = () => remove(index);

  return (
    <View style={styles.container}>
      <Input
        type={InputType.TEXT}
        placeholder="Enter office country"
        control={control}
        name={`address.${index}.country` as Path<Type>}
      />
      <Input
        type={InputType.TEXT}
        placeholder="Enter office state"
        control={control}
        name={`address.${index}.state` as Path<Type>}
      />
      <Input
        type={InputType.TEXT}
        placeholder="Enter office region"
        control={control}
        name={`address.${index}.region` as Path<Type>}
      />
      <Input
        type={InputType.TEXT}
        placeholder="Enter office city"
        control={control}
        name={`address.${index}.city` as Path<Type>}
      />
      <Input
        type={InputType.TEXT}
        placeholder="Enter office street"
        control={control}
        name={`address.${index}.street` as Path<Type>}
      />
      <Input
        type={InputType.TEXT}
        placeholder="Enter office zipCode"
        control={control}
        name={`address.${index}.zipCode` as Path<Type>}
      />
      <Button onPress={onRemove}>Remove address</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 30,
  },
});
