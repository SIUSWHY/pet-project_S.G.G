export interface UserType {
  avatar: string;
  email: string;
  hashPassword: string;
  name: string;
  role: string;
  username: string;
  _id: string;
}
export interface UsersList {
  users: UserType[];
}

export interface RootState {}
