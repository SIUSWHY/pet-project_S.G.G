import express from 'express';
import Users from '../models/modelRegistrNewUser';
const DeleteUsers = express.Router();

DeleteUsers.delete('/deleteUsers', async (req, res) => {
  const { _id } = req.body;
  await Users.deleteMany({ _id });
  res.status(200).send({
    id: _id,
  });
});

export default DeleteUsers;
