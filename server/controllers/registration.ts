import express from 'express';
import Users from '../models/modelRegistrNewUser';
const CreateNewUser = express.Router();

CreateNewUser.post('/createNewUser', async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailInDB = await Users.findOne({ email });

    if (email === emailInDB?.email) {
      console.log('This user is register');
      return;

      // throw new Error('This user is register')
    }
    if (password === '') {
      console.log('Invalid password');

      // throw new Error('Invalid password')
    }

    const User = await Users.create(req.body);
    User.registerDate instanceof Date;
    res.send(User);
    // console.log(User)
  } catch (error) {
    return (
      res.status(500).send({
        errors: [error.message],
      }),
      alert('Неправильно введен логин или пароль')
    );
  }
});

export default CreateNewUser;
