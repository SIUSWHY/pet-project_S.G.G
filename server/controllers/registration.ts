import express from 'express';
import cryptPassword from '../helpers/hashPassword';
import validation from '../helpers/validation';
import Users from '../models/modelRegistrNewUser';
import multer from 'multer';
import fs from 'fs';
const CreateNewUser = express.Router();

// SET STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/assets/upload/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });

CreateNewUser.post('/createNewUser', upload.single('avatar'), async (req, res) => {
  const { password, username, name, email, date } = req.body;
  console.log(req.body);

  const hashPassword: string = await cryptPassword(password);
  const img = fs.readFileSync(req.file!.path);
  const encode_img = img.toString('base64');
  const avatar = {
    contentType: req.file!.mimetype,
    image: new Buffer(encode_img, 'base64'),
  };

  // const errors = await validation(req, res);
  // if (errors.length !== 0) {
  //   return res.send({
  //     errors,
  //   });
  // }

  const User = await Users.create({ username, name, email, hashPassword, avatar, date });
  res.send(User);
});

export default CreateNewUser;
