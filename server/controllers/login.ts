import User from '../models/modelRegistrNewUser';
import bcrypt from 'bcryptjs';
import createToken from '../helpers/createToken';
import express from 'express';
const LoginUser = express.Router();

LoginUser.post('/loginUser', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ $and: [{ email }, { password }] });
  const isPasswordValid: Promise<boolean> = bcrypt.compare(password, user!.hashPassword);

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  if (user !== null) {
    const token: string = createToken({
      email: user.email,
      username: user.username,
      name: user.name,
      role: user.role,
    });

    return res.status(200).send({ massege: 'You login. Welcome', token });
  } else {
    return res.status(404).send(`Incorrect Data`);
  }
});

export default LoginUser;
