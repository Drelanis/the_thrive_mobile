export type DirectionType = {
  id: string;
  name: string;
  description: string;
};

export type OfficeAddressType = {
  country: string;
  state: string;
  region: string;
  city: string;
  street: string;
  zipCode: string;
};

export type CompanyCreatorStoreType = {
  name: string;
  email: string;
  numberOfEmployee: string;
  directions: string;
};

export type CompanyCreatorInitialStateType = {
  company: CompanyCreatorStoreType;
  address: OfficeAddressType[];
};
