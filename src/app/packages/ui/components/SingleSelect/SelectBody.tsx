import {
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@gluestack-ui/themed';
import { FieldValues, Path, PathValue } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { ChevronDown } from '../../icons';

type Props<Type extends FieldValues> = {
  onChange: (selectValue: string) => void;
  value: PathValue<Type, Path<Type>>;
};

export const SelectBody = <Type extends FieldValues>(props: Props<Type>) => {
  const { onChange, value } = props;

  // TODO Fetch items from Server
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
            <SelectItem label="Ukraine" value="Ukraine" />
            <SelectItem label="USA" value="USA" />
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
