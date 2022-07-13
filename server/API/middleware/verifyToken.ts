import jwt from 'jsonwebtoken';
const { JWT_KEY } = process.env;

export function verifyToken(req: any, res: any, next: any) {
  try {
    const token = req.headers.authorization.split(' ').pop();
    console.log(token);

    // verify a token symmetric - synchronous
    const decoded = jwt.verify(token, 'JWT_KEY');

    req.user = decoded;

    console.log(decoded); // bar
    next();
    debugger;
  } catch (error) {
    return res.status(403).send({
      errors: [error.message],
    });
  }
}
