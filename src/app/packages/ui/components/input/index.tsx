import { Input as GluestackInput, InputField } from '@gluestack-ui/themed';

type Props = {
  placeholder?: string;
};

export const Input = (props: Props) => {
  const { placeholder } = props;

  return (
    <GluestackInput variant="underlined" size="md">
      <InputField
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={placeholder}
      />
    </GluestackInput>
  );
};

export * from './InputPassword';
