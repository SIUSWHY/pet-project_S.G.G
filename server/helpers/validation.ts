import { validationResult } from 'express-validator';
import Users from '../models/modelRegistrNewUser';
import { ValidationMode } from '../types/validationMode';

async function validation(req: any, res: any) {
  const Errors = validationResult(req);

  if (!Errors.isEmpty()) {
    return Errors.array();
  }
  const username = req.body.username;
  const email = req.body.email;

  const User = await Users.findOne({
    $or: [{ email }, { username }],
  });

  // switch (mode) {
  //   case ValidationMode.register: {
  //     if (User !== null) {
  //       return res.status(409).send('User Already Exist. Please Login');
  //     }
  //     return [];
  //   }
  //   case ValidationMode.login: {
  //   }
  // }

  if (User !== null) {
    return res.status(409).send({ message: 'User Already Exist. Please Login' });
  }
  return [];
}

export default validation;
