// eslint-disable-next-line simple-import-sort/imports
import {
  CheckIcon,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  Checkbox as GluestackCheckbox,
} from '@gluestack-ui/themed';

type Props = {
  ariaLabel: string;
  value: string;
};

export const Checkbox = (props: Props) => {
  const { ariaLabel, value } = props;

  return (
    <GluestackCheckbox aria-label={ariaLabel} value={value}>
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>{ariaLabel}</CheckboxLabel>
    </GluestackCheckbox>
  );
};
