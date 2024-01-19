import { Button as GluestackButton, ButtonText } from '@gluestack-ui/themed';
import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

export const Button = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <GluestackButton style={styles.button}>
      <ButtonText>{children}</ButtonText>
    </GluestackButton>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
});
