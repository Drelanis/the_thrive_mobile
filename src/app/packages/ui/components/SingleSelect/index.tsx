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

import { ValidationHints } from '$app/packages/configs';

export const SingleSelect = <Type extends FieldValues>(
  props: SingleSelectProps<Type>,
) => {
  const { control, name, setValue, label, helper } = props;

  const { value, onChange, isInvalid } = useLogic({
    control,
    name,
    setValue,
  });

  return (
    <FormControl style={styles.container} isInvalid={isInvalid}>
      <FormControlLabel>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <FormControlHelper>
        <FormControlHelperText>{helper}</FormControlHelperText>
      </FormControlHelper>
      <SelectBody value={value} onChange={onChange} />
      <FormControlError>
        <FormControlErrorText>
          {isInvalid && ValidationHints.REQUIRED}
        </FormControlErrorText>
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
