export type AddressFieldType = {
  placeholder: string;
  name: string;
  mask?: string;
};

export type CountryAddressConfig = {
  USA: AddressFieldType[];
  Ukraine: AddressFieldType[];
};

export const countryAddressConfig = {
  USA: [
    {
      placeholder: 'Enter office state',
      name: 'state',
    },
    {
      placeholder: 'Enter office region',
      name: 'region',
    },
    {
      placeholder: 'Enter office city',
      name: 'city',
    },
    {
      placeholder: 'Enter office street',
      name: 'street',
    },
    {
      placeholder: 'Enter office zip-code',
      name: 'zipCode',
      mask: '9999-9999',
    },
  ],
  Ukraine: [
    {
      placeholder: 'Enter office region',
      name: 'region',
    },
    {
      placeholder: 'Enter office city',
      name: 'city',
    },
    {
      placeholder: 'Enter office street',
      name: 'street',
    },
    {
      placeholder: 'Enter office zip-code',
      name: 'zipCode',
      mask: '99999',
    },
  ],
};
