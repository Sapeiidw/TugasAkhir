export interface User {
  data: {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: number;
    verifed: boolean;
    role: string;
    token: string;
    profilePhoto: null;
  };
}
