import { UserRoles } from './constants';

export type DirectionType = {
  direction: string;
  description: string;
};

export type LocationType = {
  country: string;
  remote: boolean;
  city?: string;
  street?: string;
  buildingNumber?: string;
};

export type CompanyType = {
  id: string;
  name: string;
  email: string;
  password: string;
  directions: (string | undefined)[];
  location: LocationType;
  currency_id: string;
  createdAt: Date;
  updatedAt: Date;
};

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
