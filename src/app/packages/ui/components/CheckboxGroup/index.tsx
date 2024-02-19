// eslint-disable-next-line simple-import-sort/imports
import {
  CheckboxGroup as GluestackCheckboxGroup,
  VStack,
} from '@gluestack-ui/themed';
import { FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { CheckboxGroupType } from './types';
import { useLogic } from './useLogic';

export const CheckboxGroup = <Type extends FieldValues>(
  props: CheckboxGroupType<Type>,
) => {
  const { control, name, options } = props;

  const { values, onChange, checkboxes } = useLogic({ control, name, options });

  return (
    <GluestackCheckboxGroup value={values} onChange={onChange}>
      <VStack style={styles.container}>{checkboxes}</VStack>
    </GluestackCheckboxGroup>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
