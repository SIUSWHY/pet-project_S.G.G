import express from 'express';
import cryptPassword from '../helpers/hashPassword';
import validation from '../helpers/validation';
import Users from '../models/modelRegistrNewUser';
const CreateNewUser = express.Router();

CreateNewUser.post('/createNewUser', async (req, res) => {
  const { password, username, name, email } = req.body;
  const hashPassword: string = await cryptPassword(password);

  const errors = await validation(req, res);
  if (errors.length !== 0) {
    return res.send({
      errors,
    });
  }

  const User = await Users.create({ username, name, email, hashPassword });
  res.send(User);
});

export default CreateNewUser;
