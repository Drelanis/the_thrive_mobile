import { View } from '@gluestack-ui/themed';
import { FieldValues, Path } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { FormFieldProps } from './types';
import { useLogic } from './useLogic';

import { COUNTRIES } from '$app/stores/company';
import { Button, SingleSelect } from '$ui';

export const FormField = <Type extends FieldValues>(
  props: FormFieldProps<Type>,
) => {
  const { index, control, remove, setValue, setCountry } = props;

  const { addressFields } = useLogic({ control, index, setCountry });

  return (
    <View style={styles.container}>
      <SingleSelect
        control={control}
        items={COUNTRIES}
        name={`address.${index}.country` as Path<Type>}
        label="Enter office country"
        helper="You can choose only one country"
        setValue={setValue}
      />
      {addressFields}
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
