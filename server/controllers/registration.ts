import express from 'express';
import validation from '../helpers/validation';
import Users from '../models/modelRegistrNewUser';
const CreateNewUser = express.Router();

CreateNewUser.post('/createNewUser', async (req, res) => {
  const errors = await validation(req, res);
  if (errors.length !== 0) {
    return res.send({
      errors,
    });
  }
  const User = await Users.create(req.body);
  res.send(User);
});

export default CreateNewUser;
