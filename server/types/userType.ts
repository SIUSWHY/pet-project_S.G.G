export interface UserType {
  _id?: string;
  username: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  registerDate: Date;
  hashPassword: string;
}
