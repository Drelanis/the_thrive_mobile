// eslint-disable-next-line simple-import-sort/imports
import {
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectInput,
  SelectPortal,
  SelectTrigger,
} from '@gluestack-ui/themed';
import { FieldValues, Path, PathValue } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { ChevronDown } from '../../icons';

import { JsxElement } from '$app/packages/common';

type Props<Type extends FieldValues> = {
  onChange: (selectValue: string) => void;
  value: PathValue<Type, Path<Type>>;
  items: JsxElement[];
};

export const SelectBody = <Type extends FieldValues>(props: Props<Type>) => {
  const { onChange, value, items } = props;

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger>
        <SelectInput placeholder="Select country" value={value} />
        <Icon style={styles.icon} as={ChevronDown} />
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {items}
          </SelectContent>
        </SelectPortal>
      </SelectTrigger>
    </Select>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
});
