import { createContext } from 'react';

import { UserRoles, UserSessionType } from '$configs';

type ContextType = {
  session: UserSessionType | null;
  setSession: React.Dispatch<React.SetStateAction<UserSessionType | null>>;
};

export const SessionContext = createContext<ContextType>({
  session: {
    user: {
      name: '',
      email: '',
      image: '',
      id: '',
      role: UserRoles.USER,
      isTwoFactorEnabled: false,
      emailVerified: '',
    },
    expires: '',
  },
  setSession: () => {},
});
