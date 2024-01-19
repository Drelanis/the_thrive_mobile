import { Input, InputField, InputSlot } from '@gluestack-ui/themed';

import { useLogic } from './useLogic';

import { EyeOffIcon, EyeOnIcon } from '$ui';

export const InputPassword = () => {
  const { isVisible, hidePassword, showPassword } = useLogic();

  return (
    <Input variant="underlined" size="md">
      <InputField
        type={isVisible ? 'text' : 'password'}
        placeholder="Enter password"
      />
      <InputSlot onPress={isVisible ? hidePassword : showPassword}>
        {isVisible && <EyeOnIcon size={20} color="black" />}
        {!isVisible && <EyeOffIcon size={20} color="black" />}
      </InputSlot>
    </Input>
  );
};
