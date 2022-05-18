import jwt from 'jsonwebtoken';
const { JWT_KEY } = process.env;

function createToken(user: any) {
  const token: string = jwt.sign(user, 'JWT_KEY');
  return token;
}

export default createToken;
