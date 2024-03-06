import { UserRoles } from './constants';

export type ScreenStackType = {
  SignIn: undefined;
  SignUp: undefined;
  BottomNavigation: undefined;
  Company: undefined;
  Store: undefined;
  Ideas: undefined;
};

export type ResponseType = {
  message: string;
  isError?: boolean;
  isTwoFactor?: boolean;
};

export type UserType = {
  name: string;
  email: string;
  image: string;
  id: string;
  role: UserRoles;
  isTwoFactorEnabled: boolean;
  emailVerified: string;
};

export type UserSessionType = {
  user: UserType;
  expires: string;
};

export type CompanyDirectionType = {
  id: string;
  description: string;
  name: string;
};
