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
};

export type SignInResponseType = {
  isError?: boolean;
  message?: string;
};
