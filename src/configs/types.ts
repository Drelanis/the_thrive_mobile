export type DirectionType = {
  direction: string;
  description: string;
};

export type LocationType = {
  country: string;
  city: string;
  street: string;
  buildingNumber: string;
  remote: boolean;
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
