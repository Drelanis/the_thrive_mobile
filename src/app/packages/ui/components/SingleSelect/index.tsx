import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from '@gluestack-ui/themed';
import { FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { SelectBody } from './SelectBody';
import { SingleSelectProps } from './types';
import { useLogic } from './useLogic';

export const SingleSelect = <Type extends FieldValues>(
  props: SingleSelectProps<Type>,
) => {
  const { control, name, setValue, label, helper, items } = props;

  const { value, onChange, isInvalid, errorMessage, selectItems } = useLogic({
    control,
    name,
    setValue,
    items,
  });

  return (
    <FormControl style={styles.container} isInvalid={isInvalid}>
      <FormControlLabel>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <FormControlHelper>
        <FormControlHelperText>{helper}</FormControlHelperText>
      </FormControlHelper>
      <SelectBody value={value} onChange={onChange} items={selectItems} />
      <FormControlError>
        <FormControlErrorText>{isInvalid && errorMessage}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    padding: 0,
    gap: 0,
    height: '15%',
  },
});
