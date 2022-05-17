import { validationResult } from 'express-validator';
import Users from '../models/modelRegistrNewUser';

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

  if (User !== null) {
    return res.status(409).send('User Already Exist. Please Login');
  }

  return [];
}

export default validation;
