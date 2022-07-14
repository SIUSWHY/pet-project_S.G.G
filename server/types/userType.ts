export interface UserType {
  _id?: string;
  username: string;
  name: string;
  email: string;
  role: string;
  avatar: { name: string; desc: string; img: { data: Buffer; contentType: String } };
  date: string;
  hashPassword: string;
}
