import jwt, { JwtPayload } from 'jsonwebtoken';
const { JWT_KEY } = process.env;
import Cookies from 'js-cookie';

export interface UserType {
  username: string;
  name: string;
  email: string;
  role: string;
}

export function decodeToken() {
  const token: string | undefined = Cookies.get('Token');
  const user: UserType | JwtPayload | null | string = jwt.decode(token!);
  return user;
}
