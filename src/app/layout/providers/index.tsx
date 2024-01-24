import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const AppProviders = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <NavigationContainer>{children}</NavigationContainer>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};
