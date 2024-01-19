import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { PropsWithChildren } from 'react';

export const AppProviders = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>{children}</NavigationContainer>
    </GluestackUIProvider>
  );
};
