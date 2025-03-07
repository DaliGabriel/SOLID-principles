interface AddressGeo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressGeo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: Address;
  phone: string;
  website?: string;
  company?: Company;
  role: string;
}

export interface LayoutProps {
  user?: User;
  onEdit?: (userId: User["id"]) => void;
  children?: React.ReactNode;
}

export interface GuestProps {
  user: User;
}

export interface AdminProps {
  user: User;
  onEdit?: (userId: User["id"]) => void;
  onDelete?: (userId: User["id"]) => void;
}

export interface UserListProps {
  users: User[];
  onEdit?: (userId: User["id"]) => void;
  onDelete?: (userId: User["id"]) => void;
}
