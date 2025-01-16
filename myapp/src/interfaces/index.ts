export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  role: "admin" | "moderator" | "user";
}

export interface UserTableProps {
  datas: User[];
  getRoleStyle: (role: "admin" | "moderator" | "user") => React.CSSProperties;
}

export interface UserDetail extends User {
  maidenName: string;
  gender: string;
  birthDate: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: { color: string; type: string };
  ip: string;
  address?: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  macAddress: string;
  university: string;
  bank?: {
    cardNumber: string;
    cardType: string;
    cardExpire: string;
  };
  company?: {
    name: string;
    department: string;
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto?: {
    coin: string;
    wallet: string;
    network: string;
  };
  image: string;
}
