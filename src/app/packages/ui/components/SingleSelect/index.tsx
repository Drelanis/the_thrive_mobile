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
  const { control, name, isValid, setValue, label, helper } = props;

  const { container } = useStyles({ isValid });

  const { value, onChange } = useLogic({ control, name, setValue });

  return (
    <FormControl style={container} isInvalid={!isValid}>
      <FormControlLabel>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <FormControlHelper>
        <FormControlHelperText>{helper}</FormControlHelperText>
      </FormControlHelper>
      <SelectBody value={value} onChange={onChange} />
      <FormControlError>
        <FormControlErrorText>Required field</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};

const useStyles = (params: { isValid: boolean }) => {
  const { isValid } = params;

  return StyleSheet.create({
    container: {
      marginBottom: isValid ? 0 : 20,
    },
  });
};
