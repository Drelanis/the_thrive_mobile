import { View } from '@gluestack-ui/themed';
import { FieldValues, Path } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { FormProps } from './type';

import { Button, Input, InputType, SingleSelect } from '$ui';

type Props<Type extends FieldValues> = {
  index: number;
  remove: () => void;
} & Pick<FormProps<Type>, 'control' | 'setValue'>;

export const FormField = <Type extends FieldValues>(props: Props<Type>) => {
  const { index, control, remove, setValue } = props;

  return (
    <View style={styles.container}>
      <SingleSelect
        control={control}
        name={`address.${index}.country` as Path<Type>}
        label="Enter office country"
        helper="Ypu can choose only one country"
        setValue={setValue}
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
      <Button onPress={remove}>Remove address</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
    gap: 30,
  },
});
