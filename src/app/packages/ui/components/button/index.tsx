import { Button as GluestackButton, ButtonText } from '@gluestack-ui/themed';
import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

type Props = {
  isDisabled?: boolean;
} & PropsWithChildren;

export const Button = (props: Props) => {
  const { children, isDisabled = false } = props;

  return (
    <GluestackButton isDisabled={isDisabled} style={styles.button}>
      <ButtonText>{children}</ButtonText>
    </GluestackButton>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
});
