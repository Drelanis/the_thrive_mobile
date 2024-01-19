import { AppProviders } from '../providers';

import { SignIn } from '$modules';

export const App = () => {
  return (
    <AppProviders>
      <SignIn />
    </AppProviders>
  );
};
