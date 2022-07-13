import jwt, { JwtPayload } from 'jsonwebtoken';
const { JWT_KEY } = process.env;
import Cookies from 'js-cookie';

export interface UserType {
  username: string;
  name: string;
  email: string;
  role: string;
}

export function checkPermissions() {
  const token: string | undefined = Cookies.get('Token');
  const user: UserType | JwtPayload | null | string = jwt.decode(token!);
  if (user?.role == 'Admin') {
    return true;
  } else {
    return false;
  }
  return true;
}
