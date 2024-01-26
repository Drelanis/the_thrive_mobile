// eslint-disable-next-line simple-import-sort/imports
import {
  CheckIcon,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  Checkbox as GluestackCheckbox,
} from '@gluestack-ui/themed';
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  UseFormSetValue,
  useController,
} from 'react-hook-form';

type Props<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  ariaLabel: string;
  value: string;
  setValue: UseFormSetValue<Type>;
};

export const Checkbox = <Type extends FieldValues>(props: Props<Type>) => {
  const { ariaLabel, value, control, name, setValue } = props;

  const {
    field: { value: formValue },
  } = useController({ control, name });

  const onChange = (isSelected: boolean) => {
    setValue(name, isSelected as PathValue<Type, Path<Type>>, {
      shouldValidate: true,
    });
  };

  return (
    <GluestackCheckbox
      isChecked={formValue}
      aria-label={ariaLabel}
      value={value}
      onChange={onChange}
    >
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>{ariaLabel}</CheckboxLabel>
    </GluestackCheckbox>
  );
};
