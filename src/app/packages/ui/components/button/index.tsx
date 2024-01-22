import { Button as GluestackButton, ButtonText } from '@gluestack-ui/themed';
import { PropsWithChildren } from 'react';
import { PressableProps, StyleSheet } from 'react-native';

type Props = {
  isDisabled?: boolean;
} & PropsWithChildren &
  PressableProps;

export const Button = (props: Props) => {
  const { children, isDisabled = false, ...restProps } = props;

  return (
    <GluestackButton
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
