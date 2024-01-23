import { Button as GluestackButton, ButtonText } from '@gluestack-ui/themed';
import { PropsWithChildren } from 'react';
import { PressableProps, StyleSheet } from 'react-native';

import { ButtonVariants } from './types';

type Props = {
  isDisabled?: boolean;
  variant?: ButtonVariants;
} & PropsWithChildren &
  PressableProps;

export const Button = (props: Props) => {
  const {
    children,
    isDisabled = false,
    variant = ButtonVariants.SOLID,
    ...restProps
  } = props;

  return (
    <GluestackButton
      variant={variant}
      isDisabled={isDisabled}
      style={styles.button}
      {...restProps}
    >
      <ButtonText>{children}</ButtonText>
    </GluestackButton>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
});

export * from './types';
