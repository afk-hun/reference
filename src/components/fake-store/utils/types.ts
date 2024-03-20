import { NumericLiteral } from "typescript";

export type AccountType = {
  email: string;
  username: string;
  password: string;
};

export type NameType = {
  firstname: string;
  lastname: string;
};

export type AddressType = {
  city: string;
  street: string;
  number: number | string;
  zipcode: string;
};

export type UserType = AccountType & {
  id: number;
  name: NameType;
  address: AddressType & {
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
};

export type StoreItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type ProductType = {
  productId: number;
  quantity: number;
};

export type CartType = {
  id: number;
  userId: number;
  date: string;
  products: ProductType[];
  __v: number;
};
