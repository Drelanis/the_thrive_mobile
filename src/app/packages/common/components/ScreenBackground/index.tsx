import { PropsWithChildren } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export const ScreenBackground = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <ImageBackground
      // eslint-disable-next-line no-undef
      source={require('$assets/background.jpg')}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
