export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  verifed: boolean;
  role: string;
  token?: any;
  profilePhoto?: any;
}
