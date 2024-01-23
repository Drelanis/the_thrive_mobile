import { StackNavigation } from './navigation';
import { AppProviders } from './providers';

export const App = () => {
  return (
    <AppProviders>
      <StackNavigation />
    </AppProviders>
  );
};
